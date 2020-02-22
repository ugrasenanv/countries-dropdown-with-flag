import { Component, OnInit } from '@angular/core';
import { ConfigurationOptions, CustomCountryModel }from 'intl-input-phone';

@Component({
  selector: 'app-customized-country-list',
  templateUrl: './customized-country-list.component.html',
  styleUrls: ['./customized-country-list.component.css']
})
export class CustomizedCountryListComponent implements OnInit {

  configOption1 : ConfigurationOptions;
  configOption2 : ConfigurationOptions;
  configOption3 : ConfigurationOptions;
  customCountryList1 : CustomCountryModel[] = [];
  customCountryList2: CustomCountryModel[] = [];
  customCountryList3 : CustomCountryModel[] = [];
  constructor() {

    //show the selected country
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "CountryListType1";
    this.configOption1.IsShowAllOtherCountry = false;
    this.customCountryList1.push({ISOCode : "IN"});
    this.customCountryList1.push({ISOCode : "US"});
    this.customCountryList1.push({ISOCode : "SK"});

    //Change the value in existing country list e.g. - country name, flag, country phone code, input masking
    this.configOption2 = new ConfigurationOptions();
    this.configOption2.SelectorClass = "CountryListType2";
    //change the country name.
    this.customCountryList2.push({ISOCode : "IN", Name:"INDIA A"});
    //change the country flag.
    this.customCountryList2.push({ISOCode : "PT", CustomFlagUrl: "https://beyond-gaming.net/wp-content/uploads/2017/08/TEST-logo-box.png"})
    //chnage the country phone code with input masking.
    //for saint lucia country I changed phone code and masking masking from  +1(758)  999 9999 to +1  (999) 999-9999
    this.customCountryList2.push({ISOCode : "LC", CountryPhoneCode: "+1 ", InputMasking : "(999) 999-9999"});

    //add new country in the dropdown.
    this.configOption3 = new ConfigurationOptions();
    this.configOption3.SelectorClass = "CountryListType3";
    this.configOption3.IsShowAllOtherCountry = false;
    this.customCountryList3.push({ISOCode : "IN"});
    this.customCountryList3.push({ISOCode : "TEST", CountryPhoneCode :"+81 ", InputMasking: "999 9999", Name : "Test Country" , CustomFlagUrl : "https://beyond-gaming.net/wp-content/uploads/2017/08/TEST-logo-box.png"});
    


    

   }


  ngOnInit() {
  }

}