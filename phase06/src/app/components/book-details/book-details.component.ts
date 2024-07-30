import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'book-details',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  @Input() bookDetails!: Book;
}
