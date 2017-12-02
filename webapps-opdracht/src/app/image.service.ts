import { Image } from './image/image.model';
import { retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  appUrl = '/API/images/';

  constructor(private http: Http) { }

  get images(): Observable<Image[]> {
    return this.http.get(this.appUrl).map(response =>
      response.json().map(item =>
        new Image(item.id, item.gallery, item.description, item.url)
      )
    );
  }

  // Filter afbeeldingen op basis van gallerij
  filterImages(gallery: String) {
    return this.images
      .map(images => images.filter(im => im._gallery === gallery));
  }

  getImage(id: Number) {
    return this.images.map(images => images.find(image => image._id === id));
  }
}
