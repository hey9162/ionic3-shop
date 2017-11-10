import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormGroupBase } from "./interfaces/form-group-base";
import { FormControlService } from "./services/form-control.service";

@Component({
  selector: 'dyn-forms',
  template: `
    <form [formGroup]="form" novalidate>

      <ng-container *ngFor="let config of configs;">
        <dyn-form-group [config]="config" [form]="form"></dyn-form-group>
      </ng-container>

      <button [disabled]="!form.valid" class="btn" type="button">确定</button>
    </form>
  `,
})
export class DynFormsComponent implements OnInit {
  @Input() configs: FormGroupBase<any>[] = [];
  form: FormGroup;

  constructor(private formCtrlSerice: FormControlService) {}

  ngOnInit() {
    this.form = this.formCtrlSerice.toFormGroup(this.configs);
  }

}
