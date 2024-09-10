import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBookComponent } from './edit-book.component';
import { RouterModule } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CrudService } from '../../services/crud.service';
import { By } from '@angular/platform-browser';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;
  let mockBookService: jasmine.SpyObj<LoadBooksService>;
  let mockCrudService: jasmine.SpyObj<CrudService>;
  let fakeBook: Book = {
    name: 'test',
    image: 'http://google.com/image',
    genre: ['horror', 'science'],
    author: 'mamad',
    publishData: '1400',
    price: 200,
  };

  beforeEach(async () => {
    mockBookService = jasmine.createSpyObj<LoadBooksService>(['getBookByName']);
    mockCrudService = jasmine.createSpyObj<CrudService>(['updateBook']);

    await TestBed.configureTestingModule({
      imports: [
        EditBookComponent,
        RouterModule.forRoot([]),
        NoopAnimationsModule,
      ],
      providers: [
        { provide: LoadBooksService, useValue: mockBookService },
        { provide: CrudService, useValue: mockCrudService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditBookComponent);
    mockBookService.getBookByName.and.returnValue(fakeBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(mockBookService.getBookByName).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('name input SHOULD render old name WHEN created', () => {
    // Arrange
    mockBookService.getBookByName
      .withArgs(fakeBook.name)
      .and.returnValue(fakeBook);

    // Act
    fixture.detectChanges();
    const nameInput = fixture.debugElement.query(
      By.css('[data-testid="name-input"]')
    ).nativeElement;

    // Assert
    expect(nameInput.value).toBe(fakeBook.name);
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

  it('submit SHOULD show message WHEN ever', () => {
    // Arrange
    spyOn(EditBookComponent.prototype, 'openSnackBar');

    // Act
    component.handleSubmit();
    mockCrudService.updateBook.withArgs('test', fakeBook).and.returnValue(true);
    fixture.detectChanges();

    // Assert
    expect(EditBookComponent.prototype.openSnackBar).toHaveBeenCalled();
  });
});
