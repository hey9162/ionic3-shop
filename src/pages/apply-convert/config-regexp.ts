import { Validators } from "@angular/forms";
import { FormItemOption } from "../../interfaces/form-item-option";

// name
export const NAME_VALIDATORS = [
  Validators.required,
  Validators.pattern(/(^[\u4e00-\u9fa5]{2,20}$)|(^[a-zA-Z]{2,}$)/)
]; 

// phone
export const PHONE_VALIDATORS = [
  Validators.required,
  Validators.pattern(/^[1]+\d{10}$/)
];

// idCard
export const IDCARD_VALIDATORS = [
  Validators.required,
  Validators.pattern(/^(^[1-9]\d{5}((19\d{2})|(2\d{3}))((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/)
];

// address
export const ADDRESS_VALIDATORS = [
  Validators.required,
  Validators.maxLength(120)
];

// reason
export const REASON_VALIDATORS = [
  Validators.required,
  Validators.maxLength(500)
];

// idCardImage: ['', Validators.required],
// idCardImageZ: ['', Validators.required],
// idCardImageF: ['', Validators.required],
// address: ['', [...ADDRESS_VALIDATORS]],
// reason: ['', [...REASON_VALIDATORS]],

export const CONFIG_OPTIONS: FormItemOption[] = [
  {
    labelText: '姓名',
    name: 'name',
    type: 'text',
    controlType: 'input',
    iconfont: 'icon-name',
    isRequired: true,
    placeholder: '请填写您的真实姓名',
    validation: [...NAME_VALIDATORS]
  },
  {
    labelText: '联系电话',
    name: 'phone',
    type: 'tel',
    controlType: 'input',
    iconfont: 'icon-lianxifangshi',
    isRequired: true,
    placeholder: '请填写能联系到您的电话号码',
    validation: [...PHONE_VALIDATORS]
  },
  {
    labelText: '身份证号',
    name: 'idCard',
    type: 'text',
    controlType: 'input',
    iconfont: 'icon-id-number',
    isRequired: true,
    placeholder: '请填写您的身份证号码',
    validation: [...IDCARD_VALIDATORS]
  },
  {
    labelText: '上传照片',
    name: 'idCardImage',
    type: 'file',
    controlType: 'pic',
    iconfont: 'icon-shangchuantianjiatupian',
    isRequired: true,
    validation: [Validators.required],
  },
  {
    labelText: '常住地址',
    name: 'address',
    type: 'text',
    controlType: 'modal',
    iconfont: 'icon-shangchuantianjiatupian',
    isRequired: true,
    placeholder: '请填写您现在所住地址',
    validation: [Validators.required],
  },
];
