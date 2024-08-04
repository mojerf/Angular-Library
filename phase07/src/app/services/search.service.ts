import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../interfaces/book.interface';
import { LoadBooksService } from './load-books.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search: Subject<Book[]> = new Subject<Book[]>();
  bookService = inject(LoadBooksService);

  searchFilter(param: string) {
    // const books = this.bookService.getBooks();
    // const newbooks = books.filter((book) =>
    //   book.book_title.toLocaleLowerCase().includes(param.toLocaleLowerCase())
    // ) as [Book][];
    // this.search.next(newbooks);
  }
}
