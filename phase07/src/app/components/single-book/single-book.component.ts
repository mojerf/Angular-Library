import { Component, inject, OnInit } from '@angular/core';
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
  styleUrls: ['./single-book.component.scss'],
})
export class SingleBookComponent implements OnInit {
  bookId = '';
  book!: Book;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private bookService: LoadBooksService
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id'];
    console.log(this.bookId);

    this.fetchBook();
  }

  fetchBook() {
    this.bookService.loadBooksById(this.bookId.substring(0, 6)).subscribe(
      (book: Book) => {
        this.book = book;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
