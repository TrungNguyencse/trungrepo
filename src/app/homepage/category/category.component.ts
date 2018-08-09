import { Component, OnInit, Input , OnChanges } from '@angular/core';
declare var $ : any;





@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = [
    { id: "whatnew", name: "WHAT'S NEW" },
    { id: "recommended", name: "RECOMMENDED" },
    { id: "channel", name: "CHANNEL" },
    { id: "likedvideo", name: "LIKED VIDEOS" }
  ];
  /*fake category data*/

  @Input() inputfilm;

  constructor() { }

  ngOnChanges(){
    if(this.inputfilm){
      console.log(this.inputfilm);
    }
  }
  ngOnInit() {
    setTimeout(function(){

      console.log(this.inputfilm)
    },5000);
    $(document).ready(function(){
      $('.category-slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
      });
    })
  }

}
