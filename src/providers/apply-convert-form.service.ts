import { Injectable }   from '@angular/core';
import { Validators } from "@angular/forms";

import { formRegExp } from "../components/dyn-forms/interfaces/form-regexp";
import { FormGroupBase } from "../components/dyn-forms/interfaces/form-group-base";
import { FormPic } from "../components/dyn-forms/interfaces/form-pic";

@Injectable()
export class ApplyConvertFormService {
  constructor() { }

  getForms() {
    let forms: FormGroupBase<any>[] = [
      {
        label: '姓名',
        value: '',
        name: 'name',
        type: 'text',
        iconfont: 'icon-name',
        controlType: 'textbox',
        placeholder: '请填写您的真实姓名',
        isRequired: true,
        validation: [
          Validators.required,
          Validators.pattern(formRegExp.name)
        ],
      },
      
      {
        label: '联系电话',
        value: '',
        name: 'phone',
        type: 'tel',
        iconfont: 'icon-lianxifangshi',
        controlType: 'textbox',
        placeholder: '请填写能联系到您的电话号码',
        isRequired: true,
        validation: [
          Validators.required,
          Validators.pattern(formRegExp.phone)
        ],
      },

      {
        label: '身份证号',
        value: '',
        name: 'idCard',
        type: 'text',
        iconfont: 'icon-id-number',
        controlType: 'textbox',
        placeholder: '请填写您的身份证号码',
        isRequired: true,
        validation: [
          Validators.required,
          Validators.pattern(formRegExp.idCard)
        ],
      },
    ];

    return forms;
  }

}
