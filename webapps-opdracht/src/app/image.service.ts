import { Image } from './image/image.model';
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  appUrl = 'http://18.216.187.147:3000/API/images/';

  constructor(private http: Http) { }

  get images(): Observable<Image[]> {
    return this.http.get(this.appUrl).map(response =>
      response.json().map(item =>
        new Image(item._id, item.title, item.gallery, item.description, item.url)
      )
    );
  }

  // Filter afbeeldingen op basis van gallerij
  filterImages(gallery: String) {
    return this.images
      .map(images => images.filter(im => im._gallery === gallery));
  }

  // Afbeelding toevoegen
  addImage(image: Image) {
    return this.http.post(this.appUrl, image)
      .map(res => res.json())
      .subscribe(
      res => {
        console.log(res);
        window.alert('Image added succesfully!');
      },
      err => {
        console.log('An error occured.');
        console.log(err);
      }
      );
  }

  // Afbeelding updaten
  saveImage(image) {
    return this.http.put(this.appUrl + image.id, image)
      .map(res => res.json())
      .subscribe(
      res => {
        console.log(res);
        window.alert('Image updated succesfully!');
      },
      err => {
        console.log('An error occured.');
        console.log(err);
      }
      );
  }

  // Afbeelding verwijderen
  deleteImage(imageId) {
    console.log(imageId);
    return this.http.delete(this.appUrl + imageId);
  }

}
