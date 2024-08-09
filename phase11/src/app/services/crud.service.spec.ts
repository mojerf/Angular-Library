import { TestBed } from '@angular/core/testing';
import { CrudService } from './crud.service';
import { Book } from '../interfaces/book.interface';

let fakeBook: Book = {
  name: 'test',
  image: 'http://google.com/image',
  genre: ['Horror', 'Science'],
  author: 'mamad',
  publishData: '1400',
  price: 200,
};

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('SHOULD create WHEN ever', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD create a book WHEN called', () => {
    // Arrange
    const newBook = {
      name: 'test',
      image: 'http://google.com/image',
      genre: 'Horror,Science',
      author: 'mamad',
      publishData: '1400',
      price: 200,
    };
    localStorage.clear();
    localStorage.setItem('books', JSON.stringify([fakeBook]) as string);

    // Act
    service.createBook(newBook);

    // Assert
    expect(JSON.parse(localStorage.getItem('books') as string)).toEqual([
      fakeBook,
      fakeBook,
    ]);
  });

  it('SHOULD read books WHEN called', () => {
    // Arrange
    localStorage.clear();
    localStorage.setItem('books', JSON.stringify([fakeBook]) as string);
    // Act
    const books = service.readBook(fakeBook.name);
    // Assert
    expect(books).toEqual(fakeBook);
  });

  it('SHOULD update book WHEN called', () => {
    // Arrange
    const books = [fakeBook];
    const newBook = {
      name: 'new',
      image: 'http://google.com/new',
      genre: ['new', 'science'],
      author: 'armin',
      publishData: '1400',
      price: 999,
    };
    localStorage.clear();
    localStorage.setItem('books', JSON.stringify(books));
    // Act
    service.updateBook(fakeBook.name, newBook);
    // Assert
    expect(JSON.parse(localStorage.getItem('books') as string)).toEqual([
      newBook,
    ]);
  });

  it('SHOULD delete book WHEN called', () => {
    // Arrange
    localStorage.clear();
    localStorage.setItem('books', JSON.stringify([fakeBook]));
    // Act
    service.deleteBook(fakeBook.name);
    // Assert
    expect(JSON.parse(localStorage.getItem('books') as string)).toEqual([]);
  });
});
