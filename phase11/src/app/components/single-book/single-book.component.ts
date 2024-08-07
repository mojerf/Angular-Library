import { Component, OnInit } from '@angular/core';
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
import { Title } from '@angular/platform-browser';

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
  providers: [Title],
  templateUrl: './single-book.component.html',
  styleUrl: './single-book.component.scss',
})
export class SingleBookComponent implements OnInit {
  bookName!: string;
  book!: Book;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private bookService: LoadBooksService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.bookName = this.route.snapshot.params['name'];
    this.title.setTitle(`Library - ${this.bookName}`);
    this.book = this.bookService.getBookByName(this.bookName);
  }

  goBack() {
    this.location.back();
  }
}
