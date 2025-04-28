import { TestBed } from '@angular/core/testing';

import { ProposService } from './propos.service';

describe('ProposService', () => {
  let service: ProposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
