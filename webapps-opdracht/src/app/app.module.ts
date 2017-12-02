import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Photo1100dComponent } from './photo1100d/photo1100d.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImagesComponent } from './images/images.component';
import { ImageService } from './image.service';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    Photo1100dComponent,
    NavigationComponent,
    ImagesComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
