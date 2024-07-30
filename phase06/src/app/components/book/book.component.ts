import { Component, inject, Input } from '@angular/core';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { FetchBooksService } from '../../services/fetch-books.service';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'book',
  standalone: true,
  providers: [FetchBooksService],
  imports: [BookDetailsComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() bookSpec!: Book;

  constructor() {}
}
