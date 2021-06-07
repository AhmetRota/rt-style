import { TestBed } from '@angular/core/testing';

import { RtTabsService } from './rt-tabs.service';

describe('RtTabsService', () => {
  let service: RtTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
