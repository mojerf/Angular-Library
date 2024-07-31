import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateBookService {
  constructor() {}

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
