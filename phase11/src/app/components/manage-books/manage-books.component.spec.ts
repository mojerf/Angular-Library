import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageBooksComponent } from './manage-books.component';
import { RouterModule } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';
import { Subject } from 'rxjs';

describe('ManageBooksComponent', () => {
  let component: ManageBooksComponent;
  let fixture: ComponentFixture<ManageBooksComponent>;
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
    mockBookService = jasmine.createSpyObj<LoadBooksService>(['getBooks']);
    mockBookService.books$ = new Subject<Book[]>();

    await TestBed.configureTestingModule({
      imports: [ManageBooksComponent, RouterModule.forRoot([])],
      providers: [{ provide: LoadBooksService, useValue: mockBookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD have all books WHEN ever', () => {
    // Arrange
    // Act
    mockBookService.books$.next([fakeBook, fakeBook]);
    // Assert
    expect(component.booksList).toEqual([fakeBook, fakeBook]);
  });
});
