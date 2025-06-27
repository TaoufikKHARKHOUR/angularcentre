import { TestBed } from '@angular/core/testing';

import { ApprenantsService } from './apprenants.service';

describe('ApprenantsService', () => {
  let service: ApprenantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprenantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
