import { Component, OnInit } from '@angular/core';
import { LoadBooksService } from '../../services/load-books.service';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-genres-container',
  standalone: true,
  imports: [MatChipsModule, RouterLink],
  templateUrl: './all-genres-container.component.html',
  styleUrl: './all-genres-container.component.scss',
})
export class AllGenresContainerComponent implements OnInit {
  allGenre: string[] = [];

  constructor(private bookService: LoadBooksService) {}

  ngOnInit(): void {
    this.allGenre = this.bookService.getAllgenre();
  }
}
