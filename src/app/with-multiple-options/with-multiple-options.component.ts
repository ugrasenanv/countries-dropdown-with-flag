import { Component, OnInit } from '@angular/core';
import { ConfigurationOptions, ContentOptionsEnum }from 'intl-input-phone';

@Component({
  selector: 'app-with-multiple-options',
  templateUrl: './with-multiple-options.component.html',
  styleUrls: ['./with-multiple-options.component.css']
})
export class WithMultipleOptionsComponent implements OnInit {
 
  configOption1 : ConfigurationOptions;
  configOption2 : ConfigurationOptions;
  configOption3 : ConfigurationOptions;
  constructor() {

    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "OptionType1";

    this.configOption2 = new ConfigurationOptions();
    this.configOption2.SelectorClass = "OptionType2";
    this.configOption2.OptionTextTypes = [];
    this.configOption2.OptionTextTypes.push(ContentOptionsEnum.Flag);
    this.configOption2.OptionTextTypes.push(ContentOptionsEnum.CountryName);
    this.configOption3 = new ConfigurationOptions();
    this.configOption3.SelectorClass = "OptionType3";
      this.configOption3.OptionTextTypes = [];
    this.configOption3.OptionTextTypes.push(ContentOptionsEnum.Flag);
    this.configOption3.OptionTextTypes.push(ContentOptionsEnum.CountryName);
    this.configOption3.OptionTextTypes.push(ContentOptionsEnum.CountryPhoneCode);

   }

  ngOnInit() {
  }

}