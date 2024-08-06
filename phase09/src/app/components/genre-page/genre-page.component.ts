import { Component, OnInit } from '@angular/core';
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
export class GenrePageComponent implements OnInit {
  genreName = '';
  booksByGenre: Book[] = [];

  constructor(
    private location: Location,
    private bookService: LoadBooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.genreName = this.route.snapshot.params['genre'];
    this.booksByGenre = this.bookService.getBooksByGenre(this.genreName);
  }

  goBack() {
    this.location.back();
  }
}
