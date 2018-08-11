import { TestBed, inject } from '@angular/core/testing';

import { ImageService } from './image.service';
import { Http, ConnectionBackend, RequestOptions, HttpModule } from '@angular/http';

describe('ImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [ImageService, Http, ConnectionBackend]
    });
  });

  it('should be created', inject([ImageService], (service: ImageService) => {
    expect(service).toBeTruthy();
  }));
});
