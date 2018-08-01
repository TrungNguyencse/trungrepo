import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AppRoutingModule } from './app-routing.module';
//import {Angular2SocialLoginModule} from "angular2-social-login";

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';/*facebook login*/
import { GenrecatComponent } from './genrecat/genrecat.component';
import { TrendingComponent } from './trending/trending.component';
import { WhatnewComponent } from './whatnew/whatnew.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { ChannelComponent } from './channel/channel.component';
import { LikedvideoComponent } from './likedvideo/likedvideo.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    CarouselComponent,
    LoginmodalComponent,
    GenrecatComponent,
    TrendingComponent,
    WhatnewComponent,
    RecommendedComponent,
    ChannelComponent,
    LikedvideoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

