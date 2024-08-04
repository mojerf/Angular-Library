import { TestBed } from '@angular/core/testing';

import { FetchService } from './fetch.service';

describe('FetchBooksService', () => {
  let service: FetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
