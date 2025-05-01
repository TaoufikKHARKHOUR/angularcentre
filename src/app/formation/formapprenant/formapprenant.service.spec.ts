import { TestBed } from '@angular/core/testing';

import { FormapprenantService } from './formapprenant.service';

describe('FormapprenantService', () => {
  let service: FormapprenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormapprenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
