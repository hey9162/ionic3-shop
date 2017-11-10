interface FormRegExpInterface {
  [key: string]: RegExp;
}

export const formRegExp: FormRegExpInterface = {
  name: /(^[\u4e00-\u9fa5]{2,20}$)|(^[a-zA-Z]{2,}$)/,
  phone: /^[1]+\d{10}$/,
  idCard: /^(^[1-9]\d{5}((19\d{2})|(2\d{3}))((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
};
