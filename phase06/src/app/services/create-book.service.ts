import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateBookService {
  constructor() {}

  createBook(data: any) {
    const genres = data.value.genre?.split(',');
    const mydata = {
      name: data.value.name,
      image: data.value.name,
      genre: genres,
      author: data.value.name,
      publishData: data.value.name,
      price: data.value.name,
    };
    const bookList = JSON.parse(localStorage.getItem('books') as string);
    bookList.push(mydata);
    localStorage.setItem('books', JSON.stringify(bookList));
  }
}
