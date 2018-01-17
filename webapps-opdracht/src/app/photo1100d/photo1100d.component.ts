import { Image } from '../image/image.model';
import { ImageService } from '../image.service';
import { Component, Input, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-photo1100d',
  templateUrl: './photo1100d.component.html',
  styleUrls: ['./photo1100d.component.css']
})
export class Photo1100dComponent implements OnInit, OnChanges {

  private title: string;
  private imageService: ImageService;
  private visibleImages: Observable<Image[]>;

  constructor(imageService: ImageService) {
    this.imageService = imageService;
    this.title = 'All images';
    // Default invulling gallerij
    this.visibleImages = this.imageService.images;
  }

  receive(newGallery: string) {
    // all is geen gallerijtype
    if (newGallery === 'all') {
      this.visibleImages = this.imageService.images;
    } else {
      this.visibleImages = this.imageService.filterImages(newGallery);
      this.title = 'Photos Canon ' + newGallery;
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
