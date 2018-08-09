import { Component, OnInit } from '@angular/core';
declare var $: any;

let FB = (<any>window).FB;
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  avatar:any = "../assets/img/avatar.png";
  constructor() { }

  /*logout with facebook*/
  logout() {
    (<any>window).FB.logout(function(response) {
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("imgurl");
      console.log("Logged out");
      window.location.reload();
    });
  }
/*end Logout with facebook*/


/*log out with google*/
  ggsignOut() {
  var auth2 = (<any>window).gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    window.location.reload();
    });
 }
/*end logout with google*/


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
  
      $(".dropdown-arrow").click(function(){
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

     /*Facebook logout */
     
     /*end Facebook logout */
     
  }
    
}
