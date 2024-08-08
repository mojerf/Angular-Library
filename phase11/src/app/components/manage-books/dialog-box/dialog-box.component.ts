import { Component, Inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  template: `
    <h2 mat-dialog-title>Delete book</h2>
    <mat-dialog-content>
      Would you like to delete {{ bookName }}?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button
        mat-button
        mat-dialog-close
        cdkFocusInitial
        (click)="deleteBook(bookName)"
      >
        Delete
      </button>
    </mat-dialog-actions>
  `,
})
export class DialogBoxComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public bookName: string,
    private crudService: CrudService
  ) {}

  deleteBook(name: string) {
    this.crudService.deleteBook(name);
  }
}
