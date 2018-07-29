import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*$(window).on('load', function(){

      let marginLeft = 0;
    
      $('#left').on('click', function(){
    
        if (marginLeft >= -300 && marginLeft < 0) {
    
          marginLeft = marginLeft + 100;
    
          $('.carousel ul').animate({
            marginLeft: marginLeft + "%"
          }, 1500);
    
        }
    
      });
    
      $('#right').on('click', function(){
    
        if (marginLeft >= -200) {
    
          marginLeft = marginLeft - 100;
    
          $('.carousel ul').animate({
            marginLeft: marginLeft + "%"
          }, 1500);
    
        }
    
      });
    
    });*/
    $(document).ready(function () {
      //------------------------------
      $('.trending-slick').slick({
          infinite: true,
          speed: 300,
          autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
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
      //------------------------------------------------
  });
  }

}
