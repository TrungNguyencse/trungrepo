import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { GenrecatComponent } from './genrecat/genrecat.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    CarouselComponent,
    LoginmodalComponent,
    LoginmodalComponent,
    GenrecatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
