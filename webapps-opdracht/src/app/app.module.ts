import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import { DeleteImageComponent } from './delete-image/delete-image.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  // Admin component is protected using the AuthGaurd
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
    DeleteImageComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ImageService, AuthGuard, AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
