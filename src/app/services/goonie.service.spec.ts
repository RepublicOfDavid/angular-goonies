import { TestBed } from '@angular/core/testing';

import { GoonieService } from './goonie.service';

describe('GoonieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoonieService = TestBed.get(GoonieService);
    expect(service).toBeTruthy();
  });
});
