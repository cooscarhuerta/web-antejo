import { TestBed, inject } from '@angular/core/testing';

import { ApiRoutesService } from './api-routes.service';

describe('ApiRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiRoutesService]
    });
  });

  it('should be created', inject([ApiRoutesService], (service: ApiRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
