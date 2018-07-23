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
          $('#caret').toggleClass("fa-caret-down");
          $('#caret').toggleClass("fa-caret-up");
      });
  });
}
}
