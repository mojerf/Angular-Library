import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CrudService } from '../../services/crud.service';
import { SearchService } from '../../services/search.service';
import { ErrorContainerComponent } from '../error-container/error-container.component';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-manage-books',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    RouterLink,
    MatIconModule,
    MatTooltipModule,
    ErrorContainerComponent,
    MatChipsModule,
  ],
  templateUrl: './manage-books.component.html',
  styleUrl: './manage-books.component.scss',
})
export class ManageBooksComponent implements OnInit {
  booksList: Book[] = [];
  displayedColumns: string[] = [
    'image',
    'name',
    'genre',
    'author',
    'publishData',
    'price',
    'action',
  ];

  constructor(
    private bookService: LoadBooksService,
    private crudService: CrudService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.crudService.bookChanged.subscribe((x) => {
      this.booksList = x;
    });
    this.searchService.search.subscribe((x) => {
      this.booksList = x;
    });
    this.bookService.books$.subscribe((allBooks) => {
      this.booksList = allBooks;
    });
    this.bookService.getBooks();
  }

  deleteBook(name: string) {
    this.crudService.deleteBook(name);
  }
}
