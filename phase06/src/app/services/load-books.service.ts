import { Injectable } from '@angular/core';
import { FetchBooksService } from './fetch-books.service';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class LoadBooksService {
  constructor(private fetchBooks: FetchBooksService) {}

  getBooks(): Book[] {
    return this.fetchBooks.getAllBooks();
  }
}
