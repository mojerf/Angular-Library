import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleBookComponent } from './single-book.component';
import { RouterModule } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';

describe('SingleBookComponent', () => {
  let component: SingleBookComponent;
  let fixture: ComponentFixture<SingleBookComponent>;
  let bookService = jasmine.createSpyObj(LoadBooksService, ['getBookByName']);
  let fakeBook: Book = {
    name: 'test',
    image: 'http://google.com/image',
    genre: ['horror', 'science'],
    author: 'mamad',
    publishData: '1400',
    price: 200,
  };
  let loadBooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBookComponent, RouterModule.forRoot([])],
      providers: [{ provide: LoadBooksService, useValue: bookService }],
    }).compileComponents();

    loadBooksService = TestBed.inject(LoadBooksService);
    fixture = TestBed.createComponent(SingleBookComponent);
    loadBooksService.getBookByName('test');
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(bookService.getBookByName).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
