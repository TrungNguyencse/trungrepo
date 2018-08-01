import { Component, OnInit } from '@angular/core';
declare var $: any;
declare global {
  interface Window {
    fbAsyncInit : any;
  }
}
let FB = (<any>window).FB;
@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})

export class LoginmodalComponent implements OnInit {
  constructor() { }
  ngOnInit() {
      $(document).ready(function(){
        $(".popup-signin-btn").click(function(){
            $("#popUpSignin").modal({backdrop: true});
        });
    });      
  }
  /*login with facebook*/
 checkLoginState(){   
    (<any>window).FB.login(function(response) {
        if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
        } else {
        console.log('User cancelled login or did not fully authorize.');
        }
    });
  }

}

