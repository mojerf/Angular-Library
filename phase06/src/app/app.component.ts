import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopularContainerComponent } from './components/popular-container/popular-container.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateBookService } from './services/create-book.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainPageContentComponent,
    NavbarComponent,
    PopularContainerComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  createService = inject(CreateBookService);
  title = 'phase06';

  newBookForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    publishData: new FormControl(''),
    genre: new FormControl(''),
    author: new FormControl(''),
  });

  handleSubmit() {
    this.createService.createBook(this.newBookForm);
  }
}
