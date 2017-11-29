import { retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  visibleImages = [];

  constructor() { }

  getDummyImages() {
    return this.visibleImages = dummyImages.slice(0);
  }

  // Filter afbeeldingen op basis van gallerij
  filterImages(gallery: string) {
    return this.visibleImages = dummyImages.filter(im => im.gallery === gallery);
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
    'id': 2, 'gallery': '1100d', 'description': 'Horse Head Nebula',
    'url': 'http://users.telenet.be/weerplaats/astrophoto/horsehead_1100D.jpg'
  },
  {
    'id': 3, 'gallery': '1100d', 'description': 'Rosetta Nebula',
    'url': 'https://farm8.staticflickr.com/7308/16552469915_8212ba610c_o.jpg'
  },
  {
    'id': 4, 'gallery': '1100d', 'description': 'Messier 51',
    'url': 'https://farm8.staticflickr.com/7330/16419142512_fae36fc6a1_o.jpg'
  },
  {
    'id': 5, 'gallery': '1000d', 'description': 'Lagoon Nebula',
    'url': 'http://users.telenet.be/weerplaats/astrophoto/M8_canon.jpg'
  },
  {
    'id': 6, 'gallery': '1000d', 'description': 'Pelican Nebula',
    'url': 'http://users.telenet.be/weerplaats/astrophoto/IC5070.jpg'
  },
  {
    'id': 7, 'gallery': '1000d', 'description': 'Messier 13',
    'url': 'http://users.telenet.be/weerplaats/astrophoto/M13.jpg'
  },
  {
    'id': 8, 'gallery': '1000d', 'description': 'Crescent Nebula',
    'url': 'http://users.telenet.be/weerplaats/astrophoto/NGC6888.jpg'
  },
  {
    'id': 9, 'gallery': 'd70s', 'description': 'Andromeda',
    'url': 'http://users.telenet.be/weerplaats/astrophoto/M31.jpg'
  },
  {
    'id': 10, 'gallery': 'd70s', 'description': 'Pleiades',
    'url': 'http://users.telenet.be/weerplaats/astrophoto/M45.jpg'
  },
  {
    'id': 11, 'gallery': 'd70s', 'description': 'Iris Nebula',
    'url': 'http://users.telenet.be/weerplaats/astrophoto/NGC7023_2.jpg'
  }
];
