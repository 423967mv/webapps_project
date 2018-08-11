import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ImageService } from './image.service';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { Image } from './image/image.model';
import { Observable } from 'rxjs/Observable';

describe('ImageService', () => {
  let service: ImageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientTestingModule],
      providers: [ImageService, Http, ConnectionBackend]
    });

    // Using this here prevents having to inject the service in every it()
    service = TestBed.get(ImageService);
    httpMock = TestBed.get(HttpTestingController);
  });

  // Prevents httpMock issues in other tests
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the images from the API', () => {
    const dummies: Image[] = [
      {
        '_id': '5a228e7075cce5b962b21751',
        '_title': 'Orion Nebula',
        '_gallery': '1100d',
        '_description': 'Orion Nebula',
        '_url': 'https://farm3.staticflickr.com/2912/14004865283_927a64d47b_o.jpg'
      },
      {
        '_id': '5a228e8475cce5b962b22856',
        '_title': 'Horse Head Nebula',
        '_gallery': '1100d',
        '_description': 'Horse Head Nebula',
        '_url': 'http://users.telenet.be/weerplaats/astrophoto/horsehead_1100D.jpg'
      },
      {
        '_id': '5a228e8e75cce5b962b22879',
        '_title': 'Rosetta Nebula',
        '_gallery': '1100d',
        '_description': 'Rosetta Nebula',
        '_url': 'https://farm8.staticflickr.com/7308/16552469915_8212ba610c_o.jpg'
      }
    ];

    let found: Observable<Image[]>;
    found = service.images;

    found.subscribe(result => {
      expect(result.length).toBe(3);
    });

    const req = httpMock.expectOne(service.appUrl);

    expect(req.request.method).toBe('GET');

    // Use the dummies
    req.flush(dummies);
  });

  it('should have the filterImages function', () => {
    expect(service.filterImages).toBeTruthy();
  });

  it('should have the addImage function', () => {
    expect(service.addImage).toBeTruthy();
  });

  it('should have the saveImage function', () => {
    expect(service.saveImage).toBeTruthy();
  });

  it('should have the deleteImage function', () => {
    expect(service.deleteImage).toBeTruthy();
  });
});
