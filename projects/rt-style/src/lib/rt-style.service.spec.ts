import { TestBed } from '@angular/core/testing';

import { RtStyleService } from './rt-style.service';

describe('RtStyleService', () => {
  let service: RtStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
