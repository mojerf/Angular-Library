import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent {
  bookId!: string;
  book!: Book;
  newBookForm!: FormGroup;

  constructor(
    private crudService: CrudService,
    private bookService: LoadBooksService,
    private route: ActivatedRoute
  ) {}

  initializeForm() {
    this.newBookForm = new FormGroup({
      name: new FormControl(this.book.book_title, Validators.required),
      image: new FormControl(this.book.image_url_m, Validators.required),
      publishData: new FormControl(
        this.book.year_of_publication,
        Validators.required
      ),
      author: new FormControl(this.book.book_author, Validators.required),
    });
  }

  handleSubmit() {
    this.crudService.updateBook(this.bookId, this.newBookForm.value);
  }
}
