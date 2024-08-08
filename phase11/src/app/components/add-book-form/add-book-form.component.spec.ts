import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookFormComponent } from './add-book-form.component';
import { CrudService } from '../../services/crud.service';

describe('AddBookFormComponent', () => {
  let component: AddBookFormComponent;
  let fixture: ComponentFixture<AddBookFormComponent>;
  let mockCrudService: jasmine.SpyObj<CrudService>;

  beforeEach(async () => {
    mockCrudService = jasmine.createSpyObj<CrudService>(['createBook']);

    await TestBed.configureTestingModule({
      imports: [AddBookFormComponent, NoopAnimationsModule],
      providers: [{ provide: CrudService, useValue: mockCrudService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeTruthy();
  });

  it('show message SHOULD work WHEN ever', () => {
    // Arrange
    let message = 'text';
    component.openSnackBar(message);

    // Act
    fixture.detectChanges();
    const messageContainer = document.getElementsByClassName(
      'cdk-overlay-container'
    );

    // Assert
    expect(messageContainer[0].textContent).toContain(message);
  });

  it('empty form SHOULD work WHEN ever', () => {
    // Arrange
    component.newBookForm.value.name = 'hi';

    // Act
    fixture.detectChanges();
    component.emptyForm();

    // Assert
    fixture.detectChanges();
    expect(component.newBookForm.value.name).toBeFalsy();
  });

  it('submit SHOULD show message WHEN ever', () => {
    // Arrange
    spyOn(AddBookFormComponent.prototype, 'openSnackBar');

    // Act
    component.handleSubmit();
    mockCrudService.createBook.and.returnValue(true);

    // Assert
    fixture.detectChanges();
    expect(AddBookFormComponent.prototype.openSnackBar).toHaveBeenCalled();
  });
});
