import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Image } from '../image/image.model';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  newImage: Image;

  myForm: FormGroup;
  post: any;
  gallery: String = '';
  description: String = '';
  url: String = '';

  constructor(private fb: FormBuilder) {

    this.myForm = fb.group({
      'gallery': [null, Validators.required],
      'description': [null, Validators.required],
      'url': [null, Validators.required]
    });

  }

  addImage(image) {
    this.gallery = image.gallery;
    this.description = image.description;
    this.url = image.url;

    this.newImage = new Image(image.gallery, image.description, image.url);
    // todo: toevoegen via service
    console.log('test');
  }

  ngOnInit() {
  }

}
