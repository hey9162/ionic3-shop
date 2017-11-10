import { Component, AfterViewInit } from '@angular/core';

import { ApplyConvertFormService } from "../../providers/apply-convert-form.service";

@Component({
  selector: 'page-apply-convert',
  templateUrl: 'apply-convert.html',
})
export class ApplyConvertPage implements AfterViewInit {
  configs: any[];

  constructor(
    private formService: ApplyConvertFormService
  ) {
    this.configs = formService.getForms();
  }
  
  ngAfterViewInit() {
  }

}
