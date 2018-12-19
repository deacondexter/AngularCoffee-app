import { TestBed } from '@angular/core/testing';

import { CoffeeDataService } from './coffee-data.service';

describe('CoffeeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeeDataService = TestBed.get(CoffeeDataService);
    expect(service).toBeTruthy();
  });
});
