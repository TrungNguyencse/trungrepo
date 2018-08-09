import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movies = [];
  categories = [];
  constructor(private apiService:ApiService) { }
  ngOnInit() {
    this.apiService.getVideos().subscribe(res=>{
      this.movies = res;
      console.log(this.movies);
    } )

    this.apiService.getCategory().subscribe(categoryres =>{
      this.categories = categoryres;
      console.log(this.categories);
    })
  }

}
