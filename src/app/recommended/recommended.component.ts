import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      //$(".movie-detail").css({'height':($(".slick-slide").height()+'px')});
      //$(".movie-detail").css({'width':($(".slick-slide").width()+'px')});
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
    $(window).resize(function(){
      //$(".movie-detail").css({'height':($(".slick-slide").height()+'px')});
      //$(".movie-detail").css({'width':($(".slick-slide").width()+'px')});
    })

    
  }

}
