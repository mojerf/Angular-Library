import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { Book } from '../interfaces/book.interface';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadBooksService {
  books$ = new Subject<Book[]>();

  constructor(private fetchBooks: FetchService) {}

  bookSetter(): Book[] {
    if (window.localStorage.getItem('books')) {
      return JSON.parse(
        window.localStorage.getItem('books') as string
      ) as Book[];
    } else {
      let book = this.fetchBooks.getAllBooks();
      window.localStorage.setItem('books', JSON.stringify(book));
      return book;
    }
  }

  getBooks() {
    let book = this.bookSetter();
    this.books$.next(book);
  }

  getBookByName(name: string): any {
    let books = this.bookSetter();
    return books.find(
      (book) => book.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  }

  getAllgenre() {
    let books = this.bookSetter();
    const allGenre: string[] = [];
    books.forEach((book) => {
      for (let i = 0; i < book.genre.length; i++) {
        if (!allGenre.includes(book.genre[i])) {
          allGenre.push(book.genre[i]);
        }
      }
    });
    return allGenre;
  }

  getBooksByGenre(genre: string) {
    let books = this.bookSetter();
    const booksByGenre: Book[] = [];
    books.forEach((book) => {
      if (book.genre.includes(genre)) {
        booksByGenre.push(book);
      }
    });
    return booksByGenre;
  }

  getBooksByAuthor(author: string) {
    let books = this.bookSetter();
    const booksByAuthor: Book[] = [];
    books.forEach((book) => {
      if (book.author.toLocaleLowerCase() === author.toLocaleLowerCase()) {
        booksByAuthor.push(book);
      }
    });
    return booksByAuthor;
  }
}
