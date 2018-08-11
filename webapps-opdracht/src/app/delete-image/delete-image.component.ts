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

  private imagesList: Observable<Image[]>;
  deleteForm: FormGroup;

  constructor(private imageService: ImageService, private fb: FormBuilder) {

    this.deleteForm = fb.group({
      'id': [null, Validators.required],
    });

    this.imagesList = imageService.images;
  }

  deleteImage(selectedObject) {
    // Delete via service en verwijderde image uit de lijst halen in UI
    this.imageService.deleteImage(selectedObject.id)
      .subscribe((data) => {
        this.imagesList
          .map(images => images.filter(im => im._id !== selectedObject.id));
      });
  }


  ngOnInit() {
  }

}
