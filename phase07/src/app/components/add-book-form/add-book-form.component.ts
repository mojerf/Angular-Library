import { Component, inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'add-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss'],
})
export class AddBookFormComponent {
  newBookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    publishData: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
  });

  constructor(private crudService: CrudService) {}

  handleSubmit() {
    this.crudService.createBook(this.newBookForm);
    // this.crudService.createBook(this.newBookForm.value).subscribe({  Injoori shayad behtar bashe
    //   next: (response) => console.log('Book created successfully', response),
    //   error: (error) => console.error('Error creating book', error),
    // });
  }
}
