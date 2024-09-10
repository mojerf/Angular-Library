import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookFormComponent } from './add-book-form.component';
import { CrudService } from '../../services/crud.service';
import { inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../interfaces/book.interface';

describe('AddBookFormComponent', () => {
  let component: AddBookFormComponent;
  let fixture: ComponentFixture<AddBookFormComponent>;
  let mockCrudService: jasmine.SpyObj<CrudService>;
  let service: CrudService;
  let fakeBook: Book = {
    name: 'test',
    image: 'http://google.com/image',
    genre: ['horror', 'science'],
    author: 'mamad',
    publishData: '1400',
    price: 200,
  };

  beforeEach(async () => {
    mockCrudService = jasmine.createSpyObj<CrudService>(['createBook']);

    await TestBed.configureTestingModule({
      imports: [AddBookFormComponent, NoopAnimationsModule],
      providers: [{ provide: CrudService, useValue: mockCrudService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CrudService);
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
    fixture.detectChanges();

    // Assert
    expect(component.newBookForm.value.name).toBeFalsy();
  });

  it('submit SHOULD show message WHEN ever', () => {
    // Arrange
    spyOn(AddBookFormComponent.prototype, 'openSnackBar');

    // Act
    component.handleSubmit();
    mockCrudService.createBook.and.returnValue(true);
    fixture.detectChanges();

    // Assert
    expect(AddBookFormComponent.prototype.openSnackBar).toHaveBeenCalled();
  });

  fit('SHOULD call crud service with correct data WHEN clicked', () => {
    // Arrange
    localStorage.setItem('books', JSON.stringify([]));
    const formData = new FormGroup({
      name: new FormControl(fakeBook.name),
      image: new FormControl(fakeBook.image),
      price: new FormControl(fakeBook.price),
      publishData: new FormControl(fakeBook.publishData),
      genre: new FormControl(fakeBook.genre),
      author: new FormControl(fakeBook.author),
    });
    component.newBookForm.setValue(formData.value);
    // Act
    component.handleSubmit();
    fixture.detectChanges();
    // Assert
    expect(service.createBook).toHaveBeenCalledWith(formData.value);
  });
});
