import { retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  visibleImages = [];

  constructor() { }

  getDummyImages() {
    return this.visibleImages = dummyImages.slice(0);
  }

  getImage(id: number) {
    return dummyImages.slice(0).find(image => image.id === id);
  }
}

// TODO: database aanroep hier
const dummyImages = [
  {
    'id': 1, 'gallery': '1100d', 'description': 'Orion Nebula',
    'url': 'https://farm3.staticflickr.com/2912/14004865283_927a64d47b_o.jpg'
  },
  {
    'id': 2, 'gallery': '1100d', 'description': 'Orion Nebula',
    'url': 'https://farm3.staticflickr.com/2912/14004865283_927a64d47b_o.jpg'
  },
  {
    'id': 3, 'gallery': '1100d', 'description': 'Orion Nebula',
    'url': 'https://farm3.staticflickr.com/2912/14004865283_927a64d47b_o.jpg'
  },
  {
    'id': 4, 'gallery': '1100d', 'description': 'Orion Nebula',
    'url': 'https://farm3.staticflickr.com/2912/14004865283_927a64d47b_o.jpg'
  }
];
