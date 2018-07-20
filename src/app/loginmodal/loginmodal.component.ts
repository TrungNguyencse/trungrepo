import { Component, OnInit } from '@angular/core';
declare var $: any;
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
          $("#popUpSignin").modal({backdrop: false});
      });
  });
  // Make the background not having dark overlay
  }

}
