import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-whatnew',
  templateUrl: './whatnew.component.html',
  styleUrls: ['./whatnew.component.css']
})
export class WhatnewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".movie-detail").css({'height':($(".movie-thumbnail").height()+'px')});
    })
    $(window).resize(function(){
      $(".movie-detail").css({'height':($(".movie-thumbnail").height()+'px')});
    })
    /*$('.movie-list a').mouseover(function(){
      $('.movie-thumbnail').toggleClass('hide');  
      $('.movie-detail').toggleClass('hide');    
    })*/
  }

}
