import { TestBed } from '@angular/core/testing';

import { FormPortService } from './form-port.service';

describe('FormPortService', () => {
  let service: FormPortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
