import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  bookId!: string;
  book!: Book;
  newBookForm!: FormGroup;

  constructor(
    private crudService: CrudService,
    private bookService: LoadBooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bookId = params['id'];
      this.bookService.getBookById(this.bookId).subscribe(
        (book: Book) => {
          this.book = book;
          this.initializeForm();
        },
        (error: any) => {
          console.error('Error fetching book data', error);
        }
      );
    });
  }

  initializeForm() {
    this.newBookForm = new FormGroup({
      name: new FormControl(this.book.book_title, Validators.required),
      image: new FormControl(this.book.image_url_m, Validators.required),
      publishData: new FormControl(
        this.book.year_of_publication,
        Validators.required
      ),
      author: new FormControl(this.book.book_author, Validators.required),
    });
  }

  handleSubmit() {
    this.crudService.updateBook(this.bookId, this.newBookForm.value);
  }
}
