import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImagesComponent } from './images/images.component';
import { ImageService } from './image.service';
import { ImageComponent } from './image/image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddImageComponent } from './add-image/add-image.component';
import { Route } from '@angular/router/src/config';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import { DeleteImageComponent } from './delete-image/delete-image.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'add-image', component: AddImageComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavigationComponent,
    ImagesComponent,
    ImageComponent,
    AddImageComponent,
    PageNotFoundComponent,
    HomeComponent,
    AdminComponent,
    EditImageComponent,
    DeleteImageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
