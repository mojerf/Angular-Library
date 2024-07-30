import { Component, inject } from '@angular/core';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-main-page-content',
  standalone: true,
  providers: [LoadBooksService],
  imports: [BookComponent, BookComponent],
  templateUrl: './main-page-content.component.html',
  styleUrl: './main-page-content.component.scss',
})
export class MainPageContentComponent {
  booksList: Book[] = [];
  bookService: LoadBooksService = inject(LoadBooksService);

  constructor() {
    this.booksList = this.bookService.getBooks();
  }
}
