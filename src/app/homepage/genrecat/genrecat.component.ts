import { Component, OnInit, Input , OnChanges } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-genrecat',
  templateUrl: './genrecat.component.html',
  styleUrls: ['./genrecat.component.css']
})
export class GenrecatComponent implements OnInit {
  @Input() inputcategory;
  ngOnChanges(){
    if(this.inputcategory){
      console.log(this.inputcategory);
    }
  }

  constructor() { }

  ngOnInit() {
    setTimeout(function(){

      console.log(this.inputcategory)
    },5000);

    $(document).ready(function(){
      $('.genrecat-title').click(function(){
        $('.genrecat-title').css("display", "none");
        $('.genrecat-collapse').slideDown();
      })
      $('.caret-up').click(function(){
        $('.genrecat-title').css("display", "block");
        $('.genrecat-collapse').slideUp();
      })
    })
      /*Smooth Scrolling*/
    /$(function() {
      $("a[href*='#']:not([href='#'])").click(function() {
        var target = $(this).attr("href");
        $('html,body').stop().animate({scrollTop: $(target).offset().top}, 1000);
        event.preventDefault();
  });
});
}
}
