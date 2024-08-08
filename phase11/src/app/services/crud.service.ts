import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  readonly bookChanged: Subject<Book[]> = new Subject<Book[]>();

  createBook(data: any) {
    let genres;
    if (data.value.genre) {
      const cleanedString = data.value.genre.trim().endsWith(',')
        ? data.value.genre.slice(0, -1)
        : data.value.genre;
      genres = cleanedString?.split(',');
    } else {
      genres = [];
    }
    const mydata = {
      name: data.value.name,
      image: data.value.image,
      genre: genres,
      author: data.value.author,
      publishData: data.value.publishData,
      price: data.value.price,
    };
    const bookList: Array<Book> = JSON.parse(
      localStorage.getItem('books') as string
    );

    const oldLen = bookList.length;
    bookList.push(mydata);
    localStorage.setItem('books', JSON.stringify(bookList));
    this.bookChanged.next(bookList);
    if (bookList.length === oldLen + 1) {
      return true;
    } else {
      return false;
    }
  }

  readBook(name: string) {
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    return bookList.find((book: Book) => book.name === name);
  }

  updateBook(bookName: string, info: any) {
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    const book: Book = bookList.find((book: Book) => book.name === bookName);

    book.name = info.name;
    book.author = info.author;
    book.image = info.image;
    book.price = info.price;
    book.publishData = info.publishData;
    book.genre = info.genre;

    localStorage.setItem('books', JSON.stringify(bookList));
    this.bookChanged.next(bookList);
    return true;
  }

  deleteBook(name: string) {
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    const updatedBookList = bookList.filter((book: Book) => book.name !== name);
    localStorage.setItem('books', JSON.stringify(updatedBookList));
    this.bookChanged.next(updatedBookList);
  }
}
