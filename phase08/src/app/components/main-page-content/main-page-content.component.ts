import { Component, inject, OnInit } from '@angular/core';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { VerticalBookComponent } from '../vertical-book/book.component';
import { HorizontalBookComponent } from '../horizontal-book/book.component';
import { AddBookFormComponent } from '../add-book-form/add-book-form.component';
import { SearchService } from '../../services/search.service';
import { ErrorContainerComponent } from '../error-container/error-container.component';
import { AllGenresContainerComponent } from '../all-genres-container/all-genres-container.component';

@Component({
  selector: 'app-main-page-content',
  standalone: true,
  providers: [LoadBooksService],
  imports: [
    VerticalBookComponent,
    HorizontalBookComponent,
    AddBookFormComponent,
    ErrorContainerComponent,
    AllGenresContainerComponent,
  ],
  templateUrl: './main-page-content.component.html',
  styleUrl: './main-page-content.component.scss',
})
export class MainPageContentComponent implements OnInit {
  title = 'Main Page';
  booksList: Book[] = [];
  bookService = inject(LoadBooksService);
  searchService = inject(SearchService);

  constructor() {
    this.booksList = this.bookService.getBooks();
  }
  ngOnInit(): void {
    this.searchService.search.subscribe((searchResults) => {
      this.booksList = searchResults;
    });
    this.bookService.getAllgenre();
  }
}
