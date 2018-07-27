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
      $(".movie-detail").css({'height':($(".movie-list-item").height()+'px')});
      $(".movie-detail").css({'width':($(".movie-list-item").width()+'px')});
    })
    $(window).resize(function(){
      $(".movie-detail").css({'height':($(".movie-list-item").height()+'px')});
      $(".movie-detail").css({'width':($(".movie-list-item").width()+'px')});
    })
    
  }
}
