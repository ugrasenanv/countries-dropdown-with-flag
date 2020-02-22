import { Component, OnInit } from '@angular/core';
import { ConfigurationOptions, NumberResult, OutputOptionsEnum } from 'intl-input-phone';

@Component({
  selector: 'app-integrate-validation',
  templateUrl: './integrate-validation.component.html',
  styleUrls: ['./integrate-validation.component.css']
})
export class IntegrateValidationComponent implements OnInit {
  configOption1: ConfigurationOptions;
  configOption2: ConfigurationOptions;
  configOption3: ConfigurationOptions;
  configOption4: ConfigurationOptions;
  configOption5: ConfigurationOptions;
  NumberModel: string = "+91 5465434564";
  NumberModel2: string = "+1 3235634245";
  NumberModel3 : string = "";
  SelectedCountryISOCode: string = "US";
  

  IsRequired: boolean = false;
  OutputValue : NumberResult = new NumberResult();
  OutputValue2 : NumberResult = new NumberResult();

  constructor() {
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "InputValidation1";

    this.configOption2 = new ConfigurationOptions();
    this.configOption2.SelectorClass = "InputValidation2";


    this.configOption3 = new ConfigurationOptions();
    this.configOption3.SelectorClass = "InputValidation3";

    this.configOption4 = new ConfigurationOptions();
    this.configOption4.SelectorClass = "InputValidation4";
    this.configOption4.OutputFormat = OutputOptionsEnum.Number;

    this.configOption5 = new ConfigurationOptions();
    this.configOption5.SelectorClass = "InputValidation5";

  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.NumberModel3 = "+91 9372483832";
    },2000);
  }

  requiredFlagChange(isRequire: boolean) {
    this.IsRequired = isRequire;
  }

  onNumberChage(outputResult)
  {
    this.OutputValue = outputResult;
    console.log("Output result is", this.OutputValue);    
  }

  onNumberChage2(outputResult)
  {
    this.OutputValue2 = outputResult;
    console.log("Output result 2 is", this.OutputValue2);    
  }
}