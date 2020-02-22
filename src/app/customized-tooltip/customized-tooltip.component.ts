import { Component, OnInit } from '@angular/core';
import { ConfigurationOptions, TooltipOptionsEnum } from 'intl-input-phone';

@Component({
  selector: 'app-customized-tooltip',
  templateUrl: './customized-tooltip.component.html',
  styleUrls: ['./customized-tooltip.component.css']
})
export class CustomizedTooltipComponent implements OnInit {

  configOption1: ConfigurationOptions;
  configOption2: ConfigurationOptions;
  configOption3: ConfigurationOptions;
  configOption4: ConfigurationOptions;
  constructor() {
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "ToolTipType1";
    

    this.configOption2 = new ConfigurationOptions();
    this.configOption2.SelectorClass = "ToolTipType2";
    this.configOption2.ToolTipText = TooltipOptionsEnum.CountryISOCode;

    this.configOption3 = new ConfigurationOptions();
    this.configOption3.SelectorClass = "ToolTipType3";
    this.configOption3.ToolTipText = TooltipOptionsEnum.CountryPhoneCode;

    this.configOption4 = new ConfigurationOptions();
    this.configOption4.SelectorClass = "ToolTipType4";
    this.configOption4.IsShowToolTip = false;
  }

  ngOnInit() {
  }

}