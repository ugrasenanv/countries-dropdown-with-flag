import { Component, OnInit } from '@angular/core';
import { ConfigurationOptions, ContentOptionsEnum }from 'intl-input-phone';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
configOption1 : ConfigurationOptions;

  constructor() {
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "WithBasic";
   }

  ngOnInit() {
  }

}