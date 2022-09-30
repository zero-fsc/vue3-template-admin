/*
* @description 判断是否存在中文字符
*/
export const validateChinese = (value: string): boolean => {
  const regex: RegExp = /[\u4e00-\u9fa5]/g
  return regex.test(value)
}