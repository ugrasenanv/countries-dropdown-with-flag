import { Component, OnInit } from '@angular/core';
import { ConfigurationOptions, SortOrderEnum, TooltipOptionsEnum }from 'intl-input-phone';

@Component({
  selector: 'app-customized-ordering',
  templateUrl: './customized-ordering.component.html',
  styleUrls: ['./customized-ordering.component.css']
})
export class CustomizedOrderingComponent implements OnInit {
  configOption1 : ConfigurationOptions;
  configOption2 : ConfigurationOptions;
  configOption3 : ConfigurationOptions;
  constructor() {
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "OrderByType1";
    this.configOption1.ToolTipText = TooltipOptionsEnum.CountryISOCode;
    

    this.configOption2 = new ConfigurationOptions();
    this.configOption2.SelectorClass = "OrderByType2";
    this.configOption2.SortBy = SortOrderEnum.CountryName;

    this.configOption3 = new ConfigurationOptions();
    this.configOption3.SelectorClass = "OrderByType3";
    this.configOption3.SortBy = SortOrderEnum.CountryPhoneCode;
   }

  ngOnInit() {
  }

}