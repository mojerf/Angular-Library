import { inject, Injectable } from '@angular/core';
import { FetchBooksService } from './fetch-books.service';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class LoadBooksService {
  fetchBooks = inject(FetchBooksService);

  getBooks(): Book[] {
    if (window.localStorage.getItem('books')) {
      return JSON.parse(window.localStorage.getItem('books') as string);
    } else {
      return this.fetchBooks.getAllBooks();
    }
  }

  getBookByName(name: string): any {
    const books = this.getBooks();
    return books.find(
      (book) => book.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  }
}
