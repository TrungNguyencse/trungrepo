import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { environment } from "../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }
  
  /*Api call to get videos*/
  getVideos (){
    return this.http.get( environment.pathUrlApi + "/videos")
      .map((response:Response) => response.json());
  }
  /*End Api call to get videos*/

  /*Api call to get categories*/
  getCategory (){
    return this.http.get(environment.pathUrlApi + "/category" )
    .map((response:Response) => response.json());
  }

}
