import { Injectable } from '@angular/core';
import { FetchBooksService } from './fetch-books.service';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class LoadBooksService {
  books: Book[];
  constructor(private fetchBooks: FetchBooksService) {
    const data = window.localStorage.getItem('books') as string;
    this.books = JSON.parse(data);
  }

  getBooks(): Book[] {
    return this.books;
  }

  getRandomBook(howMany: number) {
    const randomBooks: Book[] = [];
    for (let i = 0; i < howMany; i++) {
      randomBooks.push(
        this.books[Math.floor(Math.random() * this.books.length)]
      );
    }
    console.log(randomBooks);
    return randomBooks;
  }
}
