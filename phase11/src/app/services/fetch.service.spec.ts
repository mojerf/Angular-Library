import { TestBed } from '@angular/core/testing';
import { FetchService } from './fetch.service';

describe('FetchBooksService', () => {
  let service: FetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchService);
  });

  it('SHOULD create WHEN ever', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD fetch books WHEN called', () => {
    // Arrange
    // Act
    // Assert
    expect(service.getAllBooks).toBeTruthy();
  });
});
