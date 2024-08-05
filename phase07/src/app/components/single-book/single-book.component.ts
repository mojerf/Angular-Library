import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/book.interface';
import { LoadBooksService } from '../../services/load-books.service';
import { HorizontalBookComponent } from '../horizontal-book/book.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-book',
  standalone: true,
  imports: [
    HorizontalBookComponent,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterLink,
  ],
  providers: [LoadBooksService],
  templateUrl: './single-book.component.html',
  styleUrl: './single-book.component.scss',
})
export class SingleBookComponent {
  route = inject(ActivatedRoute);
  bookId = '';
  book!: Book;
  bookService = inject(LoadBooksService);
  constructor(private location: Location) {
    this.bookId = this.route.snapshot.params['id'];
    // this.book = this.bookService.getBookById(this.bookId);
  }

  goBack() {
    this.location.back();
  }
}
