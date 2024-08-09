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
    spyOn(service['search'], 'next');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD filter books WHEN called', () => {
    // Arrange
    // Act
    // Assert
    service.searchFilter(fakeBooks[1].name);
    expect(service['search'].next).toHaveBeenCalledWith([fakeBooks[1]]);
  });
});
