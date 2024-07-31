import { Component, inject } from '@angular/core';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { VerticalBookComponent } from '../vertical-book/book.component';
import { HorizontalBookComponent } from '../horizontal-book/book.component';
import { AddBookFormComponent } from '../add-book-form/add-book-form.component';

@Component({
  selector: 'app-main-page-content',
  standalone: true,
  providers: [LoadBooksService],
  imports: [
    VerticalBookComponent,
    HorizontalBookComponent,
    AddBookFormComponent,
  ],
  templateUrl: './main-page-content.component.html',
  styleUrl: './main-page-content.component.scss',
})
export class MainPageContentComponent {
  title = 'Main Page';
  booksList: Book[] = [];
  bookService: LoadBooksService = inject(LoadBooksService);

  constructor() {
    this.booksList = this.bookService.getBooks();
    // this.bookService.getRandomBook(5);
  }
}
