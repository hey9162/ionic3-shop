import { ValidatorFn } from '@angular/forms';

export interface FormItemOption {
  labelText: string;
  name: string;
  type: string;
  controlType: string;
  iconfont: string;
  isRequired?: boolean;
  placeholder?: string;
  options?: string[];
  disabled?: boolean;
  validation?: ValidatorFn[];
  value?: any;
  other?: any[];
}
