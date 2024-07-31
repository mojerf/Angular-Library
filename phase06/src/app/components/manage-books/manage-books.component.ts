import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-manage-books',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    RouterLink,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './manage-books.component.html',
  styleUrl: './manage-books.component.scss',
})
export class ManageBooksComponent implements OnInit {
  booksList: Book[] = [];
  bookService: LoadBooksService = inject(LoadBooksService);
  deleteService = inject(CrudService);

  ngOnInit(): void {
    this.booksList = this.bookService.getBooks();
    this.deleteService.bookChanged.subscribe((x) => {
      this.booksList = x;
    });
  }

  displayedColumns: string[] = [
    'image',
    'name',
    'genre',
    'author',
    'publishData',
    'price',
    'action',
  ];

  deleteBook(name: string) {
    this.deleteService.deleteBook(name);
  }
}
