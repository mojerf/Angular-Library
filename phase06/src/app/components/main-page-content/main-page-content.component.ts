import { Component, inject } from '@angular/core';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { VerticalBookComponent } from '../vertical-book/book.component';
import { HorizontalBookComponent } from '../horizontal-book/book.component';

@Component({
  selector: 'app-main-page-content',
  standalone: true,
  providers: [LoadBooksService],
  imports: [VerticalBookComponent, HorizontalBookComponent],
  templateUrl: './main-page-content.component.html',
  styleUrl: './main-page-content.component.scss',
})
export class MainPageContentComponent {
  booksList: Book[] = [];
  bookService: LoadBooksService = inject(LoadBooksService);

  constructor() {
    this.booksList = this.bookService.getBooks();
    this.bookService.getRandomBook(5);
  }
}
