import { inject, Injectable } from '@angular/core';
import { BookJson } from '../interfaces/book.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private http = inject(HttpClient);

  getAllBooks(page: number, pageSize: number) {
    const bookList = this.http.get<BookJson>(
      `/api/books?page=${page}&page_size=${pageSize}`
    );
    return bookList;
  }
}
