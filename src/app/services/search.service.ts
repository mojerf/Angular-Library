import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../interfaces/book.interface';
import { LoadBooksService } from './load-books.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search: Subject<Book[]> = new Subject<Book[]>();

  constructor(private bookService: LoadBooksService) {}

  searchFilter(param: string) {
    const data = this.bookService.bookSetter();
    const newbooks = data.filter((book) =>
      book.name.toLocaleLowerCase().includes(param.toLocaleLowerCase())
    ) as Book[];
    this.search.next(newbooks);
  }
}
