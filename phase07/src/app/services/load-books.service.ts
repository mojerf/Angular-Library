import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { Book, BookJson } from '../interfaces/book.interface';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoadBooksService {
  bookLoader = new Subject<BookJson>();

  constructor(private fetchBooks: FetchService, private http: HttpClient) {}

  getBooks(page: number, pageSize: number): BookJson {
    this.fetchBooks.getAllBooks(page, pageSize).subscribe((data: BookJson) => {
      this.bookLoader.next(data);
      return data;
    });
    return {} as BookJson;
  }

  loadBooksById(bookId: string): Observable<Book> {
    const url = `/api/books?page=1&isbn=${bookId}`;
    return this.http.get<Book>(url);
  }
}
