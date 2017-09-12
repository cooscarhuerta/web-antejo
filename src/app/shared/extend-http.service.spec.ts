import { TestBed, inject } from '@angular/core/testing';

import { ExtendHttpService } from './extend-http.service';

describe('ExtendHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtendHttpService]
    });
  });

  it('should be created', inject([ExtendHttpService], (service: ExtendHttpService) => {
    expect(service).toBeTruthy();
  }));
});
