import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesComponent } from './images.component';
import { ImageService } from '../image.service';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesComponent],
      imports: [
        HttpModule
      ],
      providers: [ImageService, Http, ConnectionBackend]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
