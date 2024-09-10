import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPageContentComponent } from './main-page-content.component';
import { RouterModule } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Subject } from 'rxjs';
import { Book } from '../../interfaces/book.interface';

describe('MainPageContentComponent', () => {
  let component: MainPageContentComponent;
  let fixture: ComponentFixture<MainPageContentComponent>;
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
    mockBookService = jasmine.createSpyObj<LoadBooksService>([
      'getBooks',
      'getAllgenre',
    ]);
    mockBookService.books$ = new Subject<Book[]>();

    await TestBed.configureTestingModule({
      imports: [MainPageContentComponent, RouterModule.forRoot([])],
      providers: [{ provide: LoadBooksService, useValue: mockBookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
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
