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
    $(document).ready(function() {
      $(".dropdown-button").click(function() {
          $("#cbp-hrsub-hide").slideToggle();
          $('#dropdown-trigger').toggleClass("dropdown-trigger-hide");
          $('#dropdown-trigger').toggleClass("dropdown-trigger");
          $('#dropdown-trigger').toggleClass("whitebackground");
          $('#caret').toggleClass("fa-caret-down");
          $('#caret').toggleClass("fa-caret-up");
          event.preventDefault();
      });
  });
      /*Smooth Scrolling*/
    $(function() {
      $("a[href*='#']:not([href='#'])").click(function() {
        var target = $(this).attr("href");
        $('html,body').stop().animate({scrollTop: $(target).offset().top}, 1000);
        event.preventDefault();
  });
});
}
}
