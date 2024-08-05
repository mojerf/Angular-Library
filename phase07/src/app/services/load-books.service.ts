import { inject, Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { BookJson } from '../interfaces/book.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadBooksService {
  bookLoader = new Subject<BookJson>();

  constructor(private fetchBooks: FetchService) {}

  getBooks(page: number, pageSize: number): BookJson {
    this.fetchBooks.getAllBooks(page, pageSize).subscribe((data: BookJson) => {
      this.bookLoader.next(data);
      return data;
    });
    return {} as BookJson;
  }

  loadBooksByName(name: string) {
    console.log('test');
  }
}
