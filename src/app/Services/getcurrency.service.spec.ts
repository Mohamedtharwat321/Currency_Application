import { TestBed } from '@angular/core/testing';

import { GetcurrencyService } from './getcurrency.service';

describe('GetcurrencyService', () => {
  let service: GetcurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
