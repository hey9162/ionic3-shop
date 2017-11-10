import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormControlService } from "./services/form-control.service";

import { DynFormsComponent } from './dyn-forms.component';
import { DynFormGroupComponent } from "./components/dyn-form-group/dyn-form-group.component";

const DECLARE_EXPORTS = [
  DynFormsComponent,
  DynFormGroupComponent
];

@NgModule({
  declarations: [
    ...DECLARE_EXPORTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...DECLARE_EXPORTS,
  ],
  providers: [
    FormControlService
  ]
})
export class DynFormsModule {}
