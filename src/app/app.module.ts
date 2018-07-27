import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { GenrecatComponent } from './genrecat/genrecat.component';
import { TrendingComponent } from './trending/trending.component';
import { WhatnewComponent } from './whatnew/whatnew.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { ChannelComponent } from './channel/channel.component';
import { LikedvideoComponent } from './likedvideo/likedvideo.component';
import { FooterComponent } from './footer/footer.component';
import { NewnavbarComponent } from './newnavbar/newnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    CarouselComponent,
    LoginmodalComponent,
    LoginmodalComponent,
    GenrecatComponent,
    TrendingComponent,
    WhatnewComponent,
    RecommendedComponent,
    ChannelComponent,
    LikedvideoComponent,
    FooterComponent,
    NewnavbarComponent
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
