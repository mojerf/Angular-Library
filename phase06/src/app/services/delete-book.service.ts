import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class DeleteBookService {
  constructor() {}

  deleteBook(name: string) {
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    const updatedBookList = bookList.filter((book: Book) => book.name !== name);
    localStorage.setItem('books', JSON.stringify(updatedBookList));
  }
}
