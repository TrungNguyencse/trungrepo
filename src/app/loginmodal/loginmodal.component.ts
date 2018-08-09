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
        document.getElementById("socialname").innerHTML = sessionStorage.getItem("username");
        document.getElementById("socialimage").setAttribute("src",sessionStorage.getItem("imgurl"));
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
        (<any>window).FB.api('/me', 'GET', {fields: 'first_name,name,id,picture.width(150).height(150)'}, function(response) {
          sessionStorage.setItem("username", response.first_name);
          sessionStorage.setItem("imgurl", response.picture.data.url);
          /*store user's info in session storage*/
          document.getElementById("socialname").innerHTML = sessionStorage.getItem("username");
          document.getElementById("socialimage").setAttribute("src",sessionStorage.getItem("imgurl"));
          /*display user's info*/
         
          //sessionStorage.getItem
          //sessionStorage.removeItem
        });
        } else {
        console.log('User cancelled login or did not fully authorize.');
        }
    });
}



/*end log out with facebook*/
/*login with google*/
onLoginGoogle(){
    console.log( (<any>window).auth2.signIn())
  }
/*end login with google*/


}

