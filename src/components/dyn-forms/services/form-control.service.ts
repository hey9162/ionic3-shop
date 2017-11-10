import { Injectable }   from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { FormGroupBase } from "../interfaces/form-group-base";

@Injectable()
export class FormControlService {

  constructor(private fb: FormBuilder) { }

  toFormGroup(configs: FormGroupBase<any>[]) {
    const group = this.fb.group({});
    configs.forEach(config => {
      group.addControl(config.name, this._createControl(config));
    });
    return group;
  }

  private _createControl(config: any) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }
}
