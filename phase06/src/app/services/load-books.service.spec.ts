import { TestBed } from '@angular/core/testing';

import { LoadBooksService } from './load-books.service';

describe('LoadBooksService', () => {
  let service: LoadBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
