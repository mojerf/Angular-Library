import { Routes } from '@angular/router';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { SingleBookComponent } from './components/single-book/single-book.component';
import { ManageBooksComponent } from './components/manage-books/manage-books.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
// import { GenrePageComponent } from './components/genre-page/genre-page.component';

export const routes: Routes = [
  { path: '', component: MainPageContentComponent },
  // { path: '/page/:page', component: MainPageContentComponent },
  { path: 'manage-books/edit/:name', component: EditBookComponent },
  { path: 'manage-books/add', component: AddBookFormComponent },
  { path: 'manage-books', component: ManageBooksComponent },
  { path: 'book/:id', component: SingleBookComponent },
  // { path: 'genre/:genre', component: GenrePageComponent },
];
