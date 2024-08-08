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
  bookName!: string;
  book!: Book;
  newBookForm: any;

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
    this.newBookForm = new FormGroup({
      name: new FormControl(this.book.name),
      image: new FormControl(this.book.image),
      price: new FormControl(this.book.price),
      publishData: new FormControl(this.book.publishData),
      genre: new FormControl(this.book.genre),
      author: new FormControl(this.book.author),
    });
  }

  handleSubmit() {
    const editBook = this.crudService.updateBook(
      this.bookName,
      this.newBookForm.value
    );
    if (editBook) {
      let message = 'Your book is created :)';
      this.openSnackBar(message);
    } else {
      let message = 'There was a problem with updating the book!';
      this.openSnackBar(message);
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'thx', {
      duration: 5000,
    });
  }
}
