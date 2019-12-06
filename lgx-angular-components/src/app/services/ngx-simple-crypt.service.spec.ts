import { TestBed } from '@angular/core/testing';

import { NgxSimpleCryptService } from './ngx-simple-crypt.service';

describe('NgxSimpleCryptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSimpleCryptService = TestBed.get(NgxSimpleCryptService);
    expect(service).toBeTruthy();
  });
});
