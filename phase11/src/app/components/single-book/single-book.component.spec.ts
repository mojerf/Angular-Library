import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleBookComponent } from './single-book.component';
import { RouterModule } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';

describe('SingleBookComponent', () => {
  let component: SingleBookComponent;
  let fixture: ComponentFixture<SingleBookComponent>;
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
      imports: [SingleBookComponent, RouterModule.forRoot([])],
      providers: [{ provide: LoadBooksService, useValue: mockBookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleBookComponent);
    mockBookService.getBookByName.and.returnValue(fakeBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(mockBookService.getBookByName).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
