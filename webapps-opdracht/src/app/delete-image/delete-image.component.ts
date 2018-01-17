import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Image } from '../image/image.model';
import { Observable } from 'rxjs/Rx';
import { ImageService } from '../image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-image',
  templateUrl: './delete-image.component.html',
  styleUrls: ['./delete-image.component.css']
})
export class DeleteImageComponent implements OnInit {

  private imageService: ImageService;
  private imagesList: Observable<Image[]>;
  deleteForm: FormGroup;

  constructor(imageService: ImageService, private fb: FormBuilder) {

    this.deleteForm = fb.group({
      'image': [null, Validators.required],
    });

    this.imageService = imageService;
    this.imagesList = imageService.images;
  }

  deleteImage(image) {
    // TODO: Delete
    console.log('testDelete');
  }


  ngOnInit() {
  }

}
