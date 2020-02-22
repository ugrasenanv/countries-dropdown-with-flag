import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'International Input Phone Demo';
  activeTab : string = "#multiple-options";
  constructor(private router : ActivatedRoute)
  {
      let currentUrl = window.location.toString();
      let urlParts = currentUrl.split('#');
      if(urlParts != null && urlParts != undefined && urlParts.length > 1)
      {
        this.activeTab = "#"+urlParts[1];
      }

  }
  
}
