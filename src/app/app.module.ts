import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IntlInputPhoneModule } from 'intl-input-phone';
import { BasicComponent } from './basic/basic.component';
import { WithMultipleOptionsComponent } from './with-multiple-options/with-multiple-options.component';
import { CustomizedTooltipComponent } from './customized-tooltip/customized-tooltip.component';
import { CustomizedOrderingComponent } from './customized-ordering/customized-ordering.component';
import { CustomizedSearchingComponent } from './customized-searching/customized-searching.component';
import { IntegrateValidationComponent } from './integrate-validation/integrate-validation.component';
import { CustomizedCountryListComponent } from './customized-country-list/customized-country-list.component';
import { RouterModule } from '@angular/router';
import { CustomizedReactiveFormComponent } from './customized-reactive-form/customized-reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, IntlInputPhoneModule, 
  ReactiveFormsModule, RouterModule.forRoot([]) ],
  declarations: [ AppComponent, BasicComponent, WithMultipleOptionsComponent, CustomizedTooltipComponent, CustomizedOrderingComponent, CustomizedSearchingComponent, IntegrateValidationComponent, CustomizedCountryListComponent, CustomizedReactiveFormComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  
}
