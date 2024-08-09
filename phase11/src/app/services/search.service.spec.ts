import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
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

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD filter books WHEN called', () => {
    // Arrange
    localStorage.clear();
    // Act
    localStorage.setItem('books', JSON.stringify(fakeBooks) as string);
    service.search.subscribe((books) => {
      expect(books).toEqual([fakeBooks[1]]);
    });
    // Assert
    service.searchFilter('anot');
  });
});
