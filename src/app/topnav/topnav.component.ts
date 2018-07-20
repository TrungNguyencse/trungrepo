import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function($) {
  
      $(".languages").click(function(){
          $(".languages ul").show();
        })
     $(".languages ul").mouseleave(function(){
       $(".languages ul").hide(); 
     });
      
     $(".languages li a").click(function(){
          $(".languages li a").removeClass('sel');
          $(this).addClass('sel');
          var selectedValue = $(this).text();
          var showLang = selectedValue;
          $('.languages .current').html(showLang);
          $('.languages .current').attr("title", selectedValue);
        })     
     });
     // Language picker dropdown event
    
     $(document).ready(function($) {
  
      $(".username").click(function(){
          $(".username ul").show();
      })
      $(".username ul").mouseleave(function(){
       $(".username ul").hide(); 
      }); 
     $(".username li a").click(function(){
          $(".username li a").removeClass('sel');
          $(this).addClass('sel');
      })
     });
     // Sign in + Sign up
  }
    
}
