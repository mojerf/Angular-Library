import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateBookService {
  constructor() {}

  createBook(bookInfo: Book) {
    const newBook = {
      name: bookInfo.name,
    };
  }
}
