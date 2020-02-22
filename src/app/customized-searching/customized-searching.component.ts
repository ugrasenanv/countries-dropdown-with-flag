import { Component, OnInit } from '@angular/core';
import { ConfigurationOptions } from 'intl-input-phone';

@Component({
  selector: 'app-customized-searching',
  templateUrl: './customized-searching.component.html',
  styleUrls: ['./customized-searching.component.css']
})
export class CustomizedSearchingComponent implements OnInit {
  configOption1: ConfigurationOptions;
  configOption2: ConfigurationOptions;

  constructor() {
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "SearchingType1";



    this.configOption2 = new ConfigurationOptions();
    this.configOption2.SelectorClass = "SearchingType2";
    this.configOption2.IsShowSearchOption = false;


  }

  ngOnInit() {
  }

}