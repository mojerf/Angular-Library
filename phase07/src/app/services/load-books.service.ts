import { inject, Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { BookJson } from '../interfaces/book.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadBooksService {
  bookLoader = new Subject<BookJson>();
  fetchBooks = inject(FetchService);

  getBooks(page: number, pageSize: number): BookJson {
    this.fetchBooks.getAllBooks(page, pageSize).subscribe((data: BookJson) => {
      this.bookLoader.next(data);
      return data;
    });
    return {} as BookJson;
  }

  // getBookById(id: string): any {
  //   const books = this.getBooks();
  //   return books.find(
  //     (book) => book.book_title.toLocaleLowerCase() === name.toLocaleLowerCase()
  //   );
  // }

  // getAllgenre() {
  //   const books = this.getBooks();
  //   const allGenre: string[] = [];
  //   books.forEach((book) => {
  //     for (let i = 0; i < book.genre.length; i++) {
  //       if (!allGenre.includes(book.genre[i])) {
  //         allGenre.push(book.genre[i]);
  //       }
  //     }
  //   });
  //   return allGenre;
  // }

  // getBooksByGenre(genre: string) {
  //   const books = this.getBooks();
  //   const booksByGenre: Book[] = [];
  //   books.forEach((book) => {
  //     if (book.genre.includes(genre)) {
  //       booksByGenre.push(book);
  //     }
  //   });
  //   return booksByGenre;
  // }

  // getBooksByAuthor(author: string) {
  //   const books = this.getBooks();
  //   const booksByAuthor: Book[] = [];
  //   books.forEach((book) => {
  //     if (book.book_author.toLocaleLowerCase() === author.toLocaleLowerCase()) {
  //       booksByAuthor.push(book);
  //     }
  //   });
  //   return booksByAuthor;
  // }
}
