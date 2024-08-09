import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'add-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.scss',
})
export class AddBookFormComponent {
  newBookForm!: FormGroup;
  private readonly SUCCESS_MESSAGE = 'Your book is created :)';
  private readonly ERROR_MESSAGE =
    'There was a problem while we were creating the book!';

  constructor(
    private createService: CrudService,
    private _snackBar: MatSnackBar
  ) {
    this.initializeForm();
  }

  private initializeForm() {
    this.newBookForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      publishData: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
    });
  }

  handleSubmit() {
    const createBook = this.createService.createBook(this.newBookForm.value);
    if (createBook) {
      let message = 'Your book is created :)';
      this.openSnackBar(this.SUCCESS_MESSAGE);
      this.emptyForm();
    } else {
      let message = 'There was a problem while we were creating the book!';
      this.openSnackBar(this.ERROR_MESSAGE);
    }
  }

  emptyForm() {
    this.newBookForm.reset();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'thx', {
      duration: 5000,
    });
  }
}
