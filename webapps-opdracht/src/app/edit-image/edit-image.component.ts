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

  private imagesList: Observable<Image[]>;
  private selected = {
    _id: '',
    _title: '',
    _gallery: '',
    _description: '',
    _url: ''

  };
  editForm: FormGroup;

  constructor(private imageService: ImageService, private fb: FormBuilder) {

    // Message doesn't appear with minLength(1)
    this.editForm = fb.group({
      'title': [this.selected._title, Validators.minLength(2)],
      'id': [this.selected._id, Validators.minLength(2)],
      'gallery': [this.selected._gallery, Validators.minLength(2)],
      'description': [this.selected._description, Validators.minLength(2)],
      'url': [this.selected._url, Validators.minLength(2)]
    });

    this.imagesList = imageService.images;
  }

  saveImage(image) {
    // Updaten via service
    this.imageService.saveImage(image);
  }

  ngOnInit() {
  }

}
