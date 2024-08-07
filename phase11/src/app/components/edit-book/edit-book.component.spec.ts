import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBookComponent } from './edit-book.component';
import { RouterModule } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;
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
      imports: [EditBookComponent, RouterModule.forRoot([])],
      providers: [{ provide: LoadBooksService, useValue: bookService }],
    }).compileComponents();

    loadBooksService = TestBed.inject(LoadBooksService);
    fixture = TestBed.createComponent(EditBookComponent);
    loadBooksService.getBookByName('test');
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(bookService.getBookByName).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
