import { ImageService } from '../image.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-photo1100d',
  templateUrl: './photo1100d.component.html',
  styleUrls: ['./photo1100d.component.css']
})
export class Photo1100dComponent implements OnInit {

  title: string;
  visibleImages = [];

  constructor(private imageService: ImageService) {
    this.title = 'Photos Canon 1100D';
    this.visibleImages = this.imageService.getDummyImages();
  }

  ngOnInit() {
  }

}
