import { Component, inject, OnInit } from '@angular/core';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { VerticalBookComponent } from '../vertical-book/book.component';
import { HorizontalBookComponent } from '../horizontal-book/book.component';
import { AddBookFormComponent } from '../add-book-form/add-book-form.component';
import { SearchService } from '../../services/search.service';
import { ErrorContainerComponent } from '../error-container/error-container.component';
import { AllGenresContainerComponent } from '../all-genres-container/all-genres-container.component';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-main-page-content',
  standalone: true,
  imports: [
    VerticalBookComponent,
    HorizontalBookComponent,
    AddBookFormComponent,
    ErrorContainerComponent,
    AllGenresContainerComponent,
    MatPaginatorModule,
  ],
  templateUrl: './main-page-content.component.html',
  styleUrl: './main-page-content.component.scss',
})
export class MainPageContentComponent implements OnInit {
  length: number;
  pageSize = 15;
  pageIndex = 0;
  pageSizeOptions = [15, 30, 45];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  title = 'Main Page';
  booksList: Book[] = [];

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.bookService.getBooks(this.pageIndex, this.pageSize);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  constructor(
    private bookService: LoadBooksService,
    private searchService: SearchService
  ) {
    let bookJson = this.bookService.getBooks(this.pageIndex, this.pageSize);
    this.booksList = bookJson.books;
    this.length = bookJson.pages * this.pageSize;
  }

  ngOnInit(): void {
    this.bookService.bookLoader.subscribe((books) => {
      this.booksList = books.books;
      this.length = books.pages * this.pageSize;
    });
  }
}
