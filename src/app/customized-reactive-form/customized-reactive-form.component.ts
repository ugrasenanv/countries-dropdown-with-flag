import { Component, OnInit } from "@angular/core";
import { ConfigurationOptions, OutputOptionsEnum } from "intl-input-phone";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-customized-reactive-form",
  templateUrl: "./customized-reactive-form.component.html",
  styleUrls: ["./customized-reactive-form.component.css"]
})
export class CustomizedReactiveFormComponent implements OnInit {
  configOption1: ConfigurationOptions;
  sampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.sampleForm = this.formBuilder.group({
      sampleReactiveControl: new FormControl()
    });
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.OutputFormat = OutputOptionsEnum.Number
  }

  ngOnInit() {}

  ToggbleEnableDisableState() {
    if (this.sampleForm.controls["sampleReactiveControl"].disabled) {
      this.sampleForm.controls["sampleReactiveControl"].enable();
    } else {
      this.sampleForm.controls["sampleReactiveControl"].disable();
    }
  }
  GetFormValue() {
    console.log("form value is ", this.sampleForm);
  }
}
