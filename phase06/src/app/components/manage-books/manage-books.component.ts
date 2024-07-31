import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { MatIconModule } from '@angular/material/icon';
import { DeleteBookService } from '../../services/delete-book.service';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

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
export class ManageBooksComponent {
  booksList: Book[] = [];
  bookService: LoadBooksService = inject(LoadBooksService);
  deleteSetvice = inject(DeleteBookService);

  constructor() {
    this.booksList = this.bookService.getBooks();
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
    this.deleteSetvice.deleteBook(name);
  }
}
