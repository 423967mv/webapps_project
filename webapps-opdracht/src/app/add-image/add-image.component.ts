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

  private imageService: ImageService;
  newImage: Image;

  myForm: FormGroup;
  post: any;
  title: String;
  gallery: String = '';
  description: String = '';
  url: String = '';


  constructor(imageService: ImageService, private fb: FormBuilder) {

    this.myForm = fb.group({
      'title': [null, Validators.required],
      'gallery': [null, Validators.required],
      'description': [null, Validators.required],
      'url': [null, Validators.required]
    });

    this.imageService = imageService;

  }

  addImage(image) {
    this.title = image.title;
    this.gallery = image.gallery;
    this.description = image.description;
    this.url = image.url;

    this.newImage = new Image(image.title, image.gallery, image.description, image.url);
    // Toevoegen via service
    this.imageService.addImage(image);
  }

  ngOnInit() {
  }

}
