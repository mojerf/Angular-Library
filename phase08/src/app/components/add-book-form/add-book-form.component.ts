import { Component, inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import {
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'add-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.scss',
})
export class AddBookFormComponent {
  createService = inject(CrudService);

  newBookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    publishData: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
  });

  constructor() {}

  handleSubmit() {
    this.createService.createBook(this.newBookForm);
  }
}
