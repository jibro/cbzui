import Vue from 'vue'
import Toast from './src/toast'     // 引入组件
let ToastConstructor = Vue.extend(Toast) // 返回一个“扩展实例构造器”

let czbToast = (option = {}) => { // 参数
  return new ToastConstructor().init(option)
}
// init:text,timing
ToastConstructor.prototype.init = function (option = {}) {
  this.vm = this.$mount()
  if (typeof option !== 'object') {
    this.text = option
  } else {
    this.text = option.text
  }
  this.timing = option.timing || 2500
  this.type = option.type || 'success'
  this.visible = true
  document.body.appendChild(this.$el)
  return new Promise((resolve) => {
    setTimeout(() => {
      this.close()
      resolve('close')
    }, this.timing)
  })
}
// 实现toast的关闭方法
ToastConstructor.prototype.close = function () {
  this.visible = false
  document.body.removeChild(this.$el)
}
export default czbToast
