import {Validator} from 'vee-validate'
import pub from '../assets/public'
let regMob = /^1[34578]\d{9}$/
let regTel = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/

// 对手机号码添加验证
const validateMobile = (rule, value, callback) => {
  if (value !== '' && !regMob.test(value)) {
    callback(new Error('请输入正确手机号码!'))
  } else {
    callback()
  }
}
// 对固定电话号码添加验证
const validateTel = (rule, value, callback) => {
  if (value !== '' && !regTel.test(value)) {
    callback(new Error('请输入正确的固定电话!'))
  } else {
    callback()
  }
}
// 对电话号码添加验证---手机号码或者固定电话
const validatePhone = (rule, value, callback) => {
  if ((value !== '' && !regMob.test(value)) && (value !== '' && !regTel.test(value))) {
    callback(new Error('请输入正确的联系电话!'))
  } else {
    callback()
  }
}
// 对密码添加验证
const validatePwd = (rule, value, callback) => {
  let reg = /^(?![0-9a-z]+$)(?![0-9A-Z]+$)(?![0-9\W]+$)(?![a-z\W]+$)(?![a-zA-Z]+$)(?![A-Z\W]+$)[a-zA-Z0-9\W_]+$/
  if (value === '') {
    callback(new Error('密码不能为空！'))
  } else if (value.length < 8) {
    callback(new Error('密码不能少于八位！'))
  } else if (!reg.test(value)) {
    callback(new Error('密码必须由数字,大写字母,小写字母,特殊符,其中至少三种组成！'))
  } else {
    callback()
  }
}
// 中英文长度校验
const validateLength = (rule, value, callback) => {
  let length = rule['length']
  if (countLength(value) > length) {
    callback(new Error(`不能超出${length}个字符！`))
  } else {
    callback()
  }
}
function countLength (str) {
  let inputLength = 0
  for (let i in str) {
    let countCode = str.codePointAt(i)
    if (countCode >= 0 && countCode <= 128) {
      inputLength++
    } else {
      inputLength += 2
    }
  }
  return inputLength
}
// 只能输入数字校验
const validateNum = (rule, value, callback) => {
  let regu = /^[0-9]*$/
  if (value !== '' && !regu.test(value)) {
    callback(new Error('请输入正整数！'))
  } else {
    callback()
  }
}
// 检验带小数位的数字
const vaildateDecimal = (rule, value, callback) => {
  let decimal = rule['decimal']
  let reg = /^\d+\.?\d*$/
  if (pub.strim(value) !== '') {
    if (!reg.test(value)) {
      callback(new Error('请输入数字值！'))
    } else {
      let arr = value.split('.')
      if (arr.length > 1) {
        if (arr[1].length > decimal) {
          callback(new Error(`请精确到小数后${decimal}位！`))
        } else {
          callback()
        }
      } else {
        callback()
      }
    }
  } else {
    callback()
  }
}
// 检测数组长度
const requiredArr = (rule, value, callback) => {
  if (value.length <= 0) {
    callback(new Error(rule['message']))
  } else {
    callback()
  }
}
export {
  validateMobile,
  validateTel,
  validatePhone,
  validatePwd,
  validateLength,
  requiredArr,
  validateNum,
  vaildateDecimal
}

export default {
  validateMobile,
  validateTel,
  validatePhone,
  validatePwd,
  validateLength,
  requiredArr,
  validateNum,
  vaildateDecimal
}
