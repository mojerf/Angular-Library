import { Component, inject } from '@angular/core';
import { LoadBooksService } from '../../services/load-books.service';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-genres-container',
  standalone: true,
  imports: [MatChipsModule, RouterLink],
  providers: [LoadBooksService],
  templateUrl: './all-genres-container.component.html',
  styleUrl: './all-genres-container.component.scss',
})
export class AllGenresContainerComponent {
  bookService: LoadBooksService = inject(LoadBooksService);
  allGenre: string[] = this.bookService.getAllgenre();
}
