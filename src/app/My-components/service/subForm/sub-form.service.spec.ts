import { TestBed } from '@angular/core/testing';

import { SubFormService } from './sub-form.service';

describe('SubFormService', () => {
  let service: SubFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
