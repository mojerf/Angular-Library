import { Component, inject } from '@angular/core';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { VerticalBookComponent } from '../vertical-book/book.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-genre-page',
  standalone: true,
  imports: [VerticalBookComponent, MatIconModule],
  providers: [LoadBooksService],
  templateUrl: './genre-page.component.html',
  styleUrl: './genre-page.component.scss',
})
export class GenrePageComponent {
  route = inject(ActivatedRoute);
  variableName = '';
  bookService = inject(LoadBooksService);
  booksByGenre: Book[] = [];
  booksByAuthor: Book[] = [];
  books: Book[] = [];
  isByAuthor = false;

  constructor(private location: Location) {
    this.variableName = this.route.snapshot.params['var'];
    this.booksByGenre = this.bookService.getBooksByGenre(this.variableName);
    this.booksByAuthor = this.bookService.getBooksByAuthor(this.variableName);
    if (this.booksByAuthor.length !== 0) {
      this.isByAuthor = true;
      this.books = this.booksByAuthor;
    } else {
      this.books = this.booksByGenre;
    }
  }

  goBack() {
    this.location.back();
  }
}
