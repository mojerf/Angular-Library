import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class UpdateBookService {
  constructor() {}

  updateBook(bookName: string, info: any) {
    console.log(info);

    const bookList = JSON.parse(localStorage.getItem('books') as string);
    const book: Book = bookList.find((book: Book) => book.name === bookName);

    book.name = info.name;
    book.author = info.author;
    book.image = info.image;
    book.price = info.price;
    book.publishData = info.publishData;
    book.genre = info.genre;

    bookList.push(book);

    localStorage.setItem('books', JSON.stringify(bookList));
  }
}
