import { ImageService } from '../image.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Image } from '../image/image.model';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  image: Image;
  myForm: FormGroup;

  title: String;
  gallery: String = '';
  description: String = '';
  url: String = '';


  constructor(private imageService: ImageService, private fb: FormBuilder) {

    this.myForm = fb.group({
      'title': [null, Validators.required],
      'gallery': [null, Validators.required],
      'description': [null, Validators.required],
      'url': [null, Validators.required]
    });
  }

  addImage(image) {
    this.title = image.title;
    this.gallery = image.gallery;
    this.description = image.description;
    this.url = image.url;

    // Toevoegen via service
    this.imageService.addImage(image);
  }

  ngOnInit() {
  }

}
