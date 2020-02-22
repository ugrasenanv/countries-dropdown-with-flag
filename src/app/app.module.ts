import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IntlInputPhoneModule } from 'intl-input-phone';


import { CustomizedTooltipComponent } from './customized-tooltip/customized-tooltip.component';


import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, IntlInputPhoneModule, 
  ReactiveFormsModule, RouterModule.forRoot([]) ],
  declarations: [ AppComponent, CustomizedTooltipComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  
}
