import { ValidatorFn } from "@angular/forms";

/**
 * @param { value }        : 输入控件 的初始值, new FormControl(question.value || '')
 * @param { name }         : formControl name, id, formControlName
 * @param { type }         : formControl text, file, tel ...
 * @param { label }        : formControl label
 * @param { iconfont }     : formControl iconfont
 * @param { isRequired }   : formControl isRequired
 * @param { controlType }  : formControl select? input? ...
 * @param { placeholder }  : formControl placeholder
 * @param { disabled }     : formControl disabled
 * @param { isModal }      : formControl 是否弹出新页面
 * @param { options }      : formControl select选项 {key: string, value: string}[] | string[]
 * @param { validation }   : formControl 验证器
 */
export interface FormGroupBase<T> {
  label: string;
  value: string;
  name: string;
  type: string;
  iconfont: string;
  controlType: string;
  placeholder?: string;
  validation?: ValidatorFn[];
  isRequired: boolean;
  disabled?: boolean;
  isModal?: boolean;
  options?: any[];
}
