import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

 
  constructor(private router : ActivatedRoute)
  {
      // let currentUrl = window.location.toString();
      // let urlParts = currentUrl.split('#');
      

  }
  
}
