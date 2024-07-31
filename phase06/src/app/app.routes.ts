import { Routes } from '@angular/router';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { SingleBookComponent } from './components/single-book/single-book.component';

export const routes: Routes = [
  { path: '', component: MainPageContentComponent },
  { path: 'manage-books', component: AddBookFormComponent },
  { path: 'book/:name', component: SingleBookComponent },
  // { path: 'first-component', component: FirstComponent },
  // { path: 'second-component', component: SecondComponent },
];
