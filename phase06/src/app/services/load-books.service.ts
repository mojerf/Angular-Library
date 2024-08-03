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

  getAllgenre() {
    const books = this.getBooks();
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
    const books = this.getBooks();
    const booksByGenre: Book[] = [];
    books.forEach((book) => {
      if (book.genre.includes(genre)) {
        booksByGenre.push(book);
      }
    });
    return booksByGenre;
  }

  getBooksByAuthor(author: string) {
    const books = this.getBooks();
    const booksByAuthor: Book[] = [];
    books.forEach((book) => {
      if (book.author.toLocaleLowerCase() === author.toLocaleLowerCase()) {
        booksByAuthor.push(book);
      }
    });
    return booksByAuthor;
  }
}
