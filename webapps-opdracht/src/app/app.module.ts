import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Photo1100dComponent } from './photo1100d/photo1100d.component';

@NgModule({
  declarations: [
    AppComponent,
    Photo1100dComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
