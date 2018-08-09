import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { GenrecatComponent } from './homepage/genrecat/genrecat.component';
import { TrendingComponent } from './homepage/trending/trending.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryComponent } from './homepage/category/category.component';
import { FilmComponent } from './homepage/category/film/film.component';
import { ApiService } from "./api.service";

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    CarouselComponent,
    LoginmodalComponent,
    GenrecatComponent,
    TrendingComponent,
    FooterComponent,
    HomepageComponent,
    CategoryComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AppComponent,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

