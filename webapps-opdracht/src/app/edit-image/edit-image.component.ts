import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Image } from '../image/image.model';
import { Observable } from 'rxjs/Rx';
import { ImageService } from '../image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

  private imageService: ImageService;
  private imagesList: Observable<Image[]>;
  editForm: FormGroup;

  constructor(imageService: ImageService, private fb: FormBuilder) {

    this.editForm = fb.group({
      'image': [null, Validators.required],
      'gallery': [null, Validators.required],
      'description': [null, Validators.required],
      'url': [null, Validators.required]
    });

    this.imageService = imageService;
    this.imagesList = imageService.images;
  }

  saveImage(image) {
    // TODO: Save
    console.log('testSave');
  }


  ngOnInit() {
  }

}
