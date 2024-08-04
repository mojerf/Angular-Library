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
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    bookList.push(mydata);
    localStorage.setItem('books', JSON.stringify(bookList));

    this.bookChanged.next(bookList);
  }

  readBook(name: string) {
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    return bookList.find((book: Book) => book.book_title === name);
  }

  updateBook(bookName: string, info: any) {
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    const book: Book = bookList.find(
      (book: Book) => book.book_title === bookName
    );

    book.book_title = info.name;
    book.book_author = info.author;
    book.image_url_m = info.image;
    // book.price = info.price;
    book.year_of_publication = info.publishData;
    // book.genre = info.genre;

    localStorage.setItem('books', JSON.stringify(bookList));
    this.bookChanged.next(bookList);
  }

  deleteBook(name: string) {
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    const updatedBookList = bookList.filter(
      (book: Book) => book.book_title !== name
    );
    localStorage.setItem('books', JSON.stringify(updatedBookList));

    this.bookChanged.next(updatedBookList);
  }
}
