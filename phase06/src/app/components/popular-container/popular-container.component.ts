import { Component, inject } from '@angular/core';
import { LoadBooksService } from '../../services/load-books.service';

@Component({
  selector: 'app-popular-container',
  standalone: true,
  imports: [],
  templateUrl: './popular-container.component.html',
  styleUrl: './popular-container.component.scss',
})
export class PopularContainerComponent {
  bookService: LoadBooksService = inject(LoadBooksService);
  popularBooks = this.bookService.getRandomBook(3);
}
