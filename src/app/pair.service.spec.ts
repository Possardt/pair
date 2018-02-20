import { TestBed, inject } from '@angular/core/testing';

import { PairService } from './pair.service';

describe('PairService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PairService]
    });
  });

  it('should be created', inject([PairService], (service: PairService) => {
    expect(service).toBeTruthy();
  }));
});
