import { TestBed } from '@angular/core/testing';

import { EpisodioService } from './episodio.service';

describe('EpisodioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpisodioService = TestBed.get(EpisodioService);
    expect(service).toBeTruthy();
  });
});
