import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBookComponent } from './edit-book.component';
import { RouterModule } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;
  let mockBookService: jasmine.SpyObj<LoadBooksService>;
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

    await TestBed.configureTestingModule({
      imports: [
        EditBookComponent,
        RouterModule.forRoot([]),
        NoopAnimationsModule,
      ],
      providers: [{ provide: LoadBooksService, useValue: mockBookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(EditBookComponent);
    mockBookService.getBookByName.and.returnValue(fakeBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(mockBookService.getBookByName).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
