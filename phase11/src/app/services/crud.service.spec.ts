import { TestBed } from '@angular/core/testing';
import { CrudService } from './crud.service';
import { Book } from '../interfaces/book.interface';
import { FormControl, FormGroup } from '@angular/forms';
let fakeBook: Book = {
  name: 'test',
  image: 'http://google.com/image',
  genre: ['horror', 'science'],
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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD create a book WHEN called', () => {
    // Arrange
    const books: Book[] = [];
    const formData = new FormGroup({
      name: new FormControl(fakeBook.name),
      image: new FormControl(fakeBook.image),
      price: new FormControl(fakeBook.price),
      publishData: new FormControl(fakeBook.publishData),
      genre: new FormControl(fakeBook.genre),
      author: new FormControl(fakeBook.author),
    });
    localStorage.setItem('books', JSON.stringify(books) as string);

    // Act
    service.createBook(formData);

    // Assert
    expect(JSON.parse(localStorage.getItem('books') as string)).toEqual([
      fakeBook,
    ]);
  });
});
