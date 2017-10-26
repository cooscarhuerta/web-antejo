import { TestBed, inject } from '@angular/core/testing';

import { DeleteFileService } from './delete-file.service';

describe('DeleteFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteFileService]
    });
  });

  it('should be created', inject([DeleteFileService], (service: DeleteFileService) => {
    expect(service).toBeTruthy();
  }));
});
