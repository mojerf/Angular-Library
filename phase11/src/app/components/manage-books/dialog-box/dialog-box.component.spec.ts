import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxComponent } from './dialog-box.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from '../../../services/crud.service';
import { By } from '@angular/platform-browser';

fdescribe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;
  let mockDrudService: jasmine.SpyObj<CrudService>;

  beforeEach(async () => {
    mockDrudService = jasmine.createSpyObj<CrudService>(['deleteBook']);

    await TestBed.configureTestingModule({
      imports: [DialogBoxComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: 'test book' }],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD delete the book WHEN delete button clicked', () => {
    // Arrange
    spyOn(DialogBoxComponent.prototype, 'deleteBook');
    const deleteButton = fixture.debugElement.query(
      By.css('[data-testid="delete-button"]')
    );

    // Act
    deleteButton.nativeElement.click();
    fixture.detectChanges();
    // Assert
    expect(DialogBoxComponent.prototype.deleteBook).toHaveBeenCalledWith(
      'test book'
    );
  });
});
