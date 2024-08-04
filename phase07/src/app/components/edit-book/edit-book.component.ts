import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss',
})
export class EditBookComponent implements OnInit {
  updateService = inject(CrudService);
  bookService = inject(LoadBooksService);
  bookName!: string;
  book!: Book;
  route = inject(ActivatedRoute);
  newBookForm: any;

  constructor() {
    this.bookName = this.route.snapshot.params['name'];
    // this.book = this.bookService.getBookByName(this.bookName);
  }

  ngOnInit(): void {
    this.newBookForm = new FormGroup({
      name: new FormControl(this.book.book_title),
      image: new FormControl(this.book.image_url_m),
      // price: new FormControl(this.book.price),
      publishData: new FormControl(this.book.year_of_publication),
      // genre: new FormControl(this.book.genre),
      author: new FormControl(this.book.book_author),
    });
  }

  handleSubmit() {
    this.updateService.updateBook(this.bookName, this.newBookForm.value);
  }
}
