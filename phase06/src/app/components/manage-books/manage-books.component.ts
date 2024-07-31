import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { MatIconModule } from '@angular/material/icon';
import { DeleteBookService } from '../../services/delete-book.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-books',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, RouterLink, MatIconModule],
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
    'name',
    'image',
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
