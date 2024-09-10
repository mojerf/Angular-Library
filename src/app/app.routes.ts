import { Routes } from '@angular/router';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { SingleBookComponent } from './components/single-book/single-book.component';
import { ManageBooksComponent } from './components/manage-books/manage-books.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { GenrePageComponent } from './components/genre-page/genre-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: 'manage-books/edit/:name', component: EditBookComponent },
  {
    path: 'manage-books/add',
    component: AddBookFormComponent,
    title: 'Library - Add new book',
  },
  {
    path: 'manage-books',
    component: ManageBooksComponent,
    title: 'Library - Manage books',
  },
  { path: 'book/:name', component: SingleBookComponent },
  { path: 'genre/:genre', component: GenrePageComponent },
  { path: 'about', component: AboutComponent, title: 'Library - About Us' },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Library - Contact Us',
  },
  { path: '', component: MainPageContentComponent, title: 'Library :)' },
];
