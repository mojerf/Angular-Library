import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenrePageComponent } from './genre-page.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { Book } from '../../interfaces/book.interface';

describe('GenrePageComponent', () => {
  let component: GenrePageComponent;
  let fixture: ComponentFixture<GenrePageComponent>;
  let mockRout: jasmine.SpyObj<ActivatedRoute>;
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
    mockRout = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: {
        params: { genre: 'mockGenre' },
      },
    });
    mockBookService = jasmine.createSpyObj<LoadBooksService>([
      'getBooksByGenre',
    ]);
    await TestBed.configureTestingModule({
      imports: [GenrePageComponent, RouterModule.forRoot([])],
      providers: [
        { provide: ActivatedRoute, useValue: mockRout },
        { provide: LoadBooksService, useValue: mockBookService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GenrePageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('SHOULD have propper genre WHEN ever', () => {
    // Arrange
    // Act
    fixture.detectChanges();
    // Assert
    expect(component.genreName).toBe('mockGenre');
  });

  it('SHOULD have proper books WHEN ever', () => {
    // Arrange
    mockBookService.getBooksByGenre.and.returnValue([fakeBook]);

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.booksByGenre).toEqual([fakeBook]);
  });
});
