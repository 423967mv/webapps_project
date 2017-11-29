import { ImageService } from '../image.service';
import { Component, Input, OnChanges, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo1100d',
  templateUrl: './photo1100d.component.html',
  styleUrls: ['./photo1100d.component.css']
})
export class Photo1100dComponent implements OnInit, OnChanges {

  private title: string;
  private imageService: ImageService;
  private visibleImages: any[];

  constructor(imageService: ImageService) {
    this.imageService = imageService;
    this.title = 'Photos Canon 1100D';
    // Default invulling gallerij
    this.visibleImages = this.imageService.getDummyImages();
  }

  receive(newGallery: string) {
    // all is geen gallerijtype
    if (newGallery === 'all') {
      this.visibleImages = this.imageService.getDummyImages();
    } else {
      this.visibleImages = this.imageService.filterImages(newGallery);
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
