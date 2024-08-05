import { inject, Injectable } from '@angular/core';
import { BookJson } from '../interfaces/book.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  // private id: number;
  private readonly url = `/api/books?page=1&page_size=10`;
  private http = inject(HttpClient);

  getAllBooks() {
    const bookList = this.http.get<BookJson>(this.url);
    return bookList;
  }
}
