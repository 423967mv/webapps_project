import { ImageService } from '../image.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo1100d',
  templateUrl: './photo1100d.component.html',
  styleUrls: ['./photo1100d.component.css']
})
export class Photo1100dComponent implements OnInit, OnChanges {

  private title: string;

  private imageService: ImageService;

  private visibleImages: any[] = [];

  @Input() filterBy = 'overview';

  constructor(imageService: ImageService) {
    this.imageService = imageService;
    this.title = 'Photos Canon 1100D';
    this.visibleImages = this.imageService.getDummyImages();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getDummyImages();
  }

}
