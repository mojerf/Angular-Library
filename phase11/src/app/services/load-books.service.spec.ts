import { TestBed } from '@angular/core/testing';
import { LoadBooksService } from './load-books.service';
import { Book } from '../interfaces/book.interface';

const fakeBooks: Book[] = [
  {
    name: 'ketab',
    image: 'http://google.com/image',
    genre: ['Horror', 'Science'],
    author: 'mamad',
    publishData: '1400',
    price: 200,
  },
  {
    name: 'another ketab',
    image: 'http://google.com/image',
    genre: ['Comedy', 'Science'],
    author: 'mamad',
    publishData: '1400',
    price: 200,
  },
];

describe('LoadBooksService', () => {
  let service: LoadBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadBooksService);
  });

  it('SHOULD create WHEN ever', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD set books WHEN bookSetter is called', () => {
    // Arrange
    localStorage.clear();
    // Act
    service.bookSetter();
    // Assert
    expect(localStorage.getItem('books')).toBeTruthy();
  });

  it('SHOULD return books to subscribers WHEN getBooks is called', () => {
    // Arrange
    localStorage.clear();
    // Act
    localStorage.setItem('books', JSON.stringify(fakeBooks) as string);
    service.books$.subscribe((books) => {
      expect(books).toEqual(fakeBooks);
    });
    // Assert
    service.getBooks();
  });

  it('SHOULD return currect book WHEN getBookByName is called', () => {
    // Arrange
    localStorage.clear();
    // Act
    localStorage.setItem('books', JSON.stringify(fakeBooks) as string);
    // Assert
    expect(service.getBookByName('another ketab')).toEqual(fakeBooks[1]);
  });

  it('SHOULD return all genres WHEN getAllgenre is called', () => {
    // Arrange
    localStorage.clear();
    // Act
    localStorage.setItem('books', JSON.stringify(fakeBooks) as string);
    // Assert
    expect(service.getAllgenre()).toEqual(['Horror', 'Science', 'Comedy']);
  });

  it('SHOULD return currect books WHEN getBooksByGenre is called', () => {
    // Arrange
    localStorage.clear();
    // Act
    localStorage.setItem('books', JSON.stringify(fakeBooks) as string);
    // Assert
    expect(service.getBooksByGenre('Horror')).toEqual([fakeBooks[0]]);
  });

  it('SHOULD return currect books WHEN getBooksByAuthor is called', () => {
    // Arrange
    localStorage.clear();
    // Act
    localStorage.setItem('books', JSON.stringify(fakeBooks) as string);
    // Assert
    expect(service.getBooksByAuthor('mamad')).toEqual(fakeBooks);
  });
});
