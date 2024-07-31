import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class ReadBookService {
  constructor() {}

  readBook(name: string) {
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    return bookList.find((book: Book) => book.name === name);
  }
}
