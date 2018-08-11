import { Image } from '../image/image.model';
import { ImageService } from '../image.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  private title: string;
  private visibleImages: Observable<Image[]>;

  constructor(private imageService: ImageService) {
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
