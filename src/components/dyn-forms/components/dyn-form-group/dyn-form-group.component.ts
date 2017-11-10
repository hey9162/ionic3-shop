import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormGroupBase } from "../../interfaces/form-group-base";

@Component({
  selector: 'dyn-form-group',
  templateUrl: 'dyn-form-group.component.html',
})
export class DynFormGroupComponent implements OnInit {
  @Input() config: FormGroupBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.config.name].valid;
  }

  constructor() {}

  ngOnInit() {
  }

}
