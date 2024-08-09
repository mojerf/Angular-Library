import { TestBed } from '@angular/core/testing';

import { LoadBooksService } from './load-books.service';

fdescribe('LoadBooksService', () => {
  let service: LoadBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadBooksService);
  });

  it('SHOULD create WHEN ever', () => {
    expect(service).toBeTruthy();
  });
});
