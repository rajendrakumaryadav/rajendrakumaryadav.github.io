import { TestBed } from '@angular/core/testing';

import { BuildTimeService } from './build-time.service';

describe('BuildTimeService', () => {
  let service: BuildTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
