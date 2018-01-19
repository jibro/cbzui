import Vue from 'vue'
import MsgBox from './src/msg-box'     // 引入组件
import Shadow from '../shadow/shadow'
let MsgBoxConstructor = Vue.extend(MsgBox) // 返回一个“扩展实例构造器”
let ShadowConstructor = Vue.extend(Shadow)
let CMsgBox = (option = {}) => {
  return new MsgBoxConstructor().init(option)
}
MsgBoxConstructor.prototype.init = function (option = {}) {
  this.vm = this.$mount()
  this.shadow = new ShadowConstructor().$mount()
  if (typeof option !== 'object') {
    this.message = option
  } else {
    this.message = option.message
  }
  this.title = option.title || '提示'
  this.confirmText = option.confirmText || '确定'
  this.cancelText = option.cancelText || '取消'
  this.showCancel = option.showCancel || false
  document.body.appendChild(this.$el)
  document.body.appendChild(this.shadow.$el)
  return new Promise((resolve, reject) => {
    this.confirm = () => {
      resolve('confirm')
      this.close()
    }
    this.cancel = () => {
      reject(new Error('cancel'))
      this.close()
    }
  })
}
MsgBoxConstructor.prototype.close = function () {
  document.body.removeChild(this.$el)
  document.body.removeChild(this.shadow.$el)
}
export default CMsgBox
