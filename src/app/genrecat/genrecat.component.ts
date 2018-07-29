import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-genrecat',
  templateUrl: './genrecat.component.html',
  styleUrls: ['./genrecat.component.css']
})
export class GenrecatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.genrecat-title').click(function(){
        $('.genrecat-title').css("display", "none");
        $('.genrecat-collapse').css("display", "block")
      })
      $('.caret-up').click(function(){
        $('.genrecat-title').css("display", "block");
        $('.genrecat-collapse').css("display", "none")
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
