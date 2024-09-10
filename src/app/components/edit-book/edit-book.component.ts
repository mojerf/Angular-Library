import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  providers: [Title],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss',
})
export class EditBookComponent implements OnInit {
  private readonly UPDATE_SUCCESS_MESSAGE = 'Your book is updated :)';
  private readonly UPDATE_ERROR_MESSAGE =
    'There was a problem with updating the book!';

  bookName!: string;
  book!: Book;
  newBookForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private bookService: LoadBooksService,
    private title: Title,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.bookName = this.route.snapshot.params['name'];
    this.title.setTitle(`Library - Editing ${this.bookName}`);
    this.book = this.bookService.getBookByName(this.bookName);

    if (this.book) {
      this.newBookForm = new FormGroup({
        name: new FormControl(this.book.name),
        image: new FormControl(this.book.image),
        price: new FormControl(this.book.price),
        publishData: new FormControl(this.book.publishData),
        genre: new FormControl(this.book.genre),
        author: new FormControl(this.book.author),
      });
    } else {
      console.error('Book not found');
    }
  }

  handleSubmit() {
    const editSuccess = this.crudService.updateBook(
      this.bookName,
      this.newBookForm.value
    );
    if (editSuccess) {
      this.openSnackBar(this.UPDATE_SUCCESS_MESSAGE);
    } else {
      this.openSnackBar(this.UPDATE_ERROR_MESSAGE);
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'thx', {
      duration: 5000,
    });
  }
}
