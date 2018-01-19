import Vue from 'vue'
import Toast from './src/toast'     // 引入组件
let ToastConstructor = Vue.extend(Toast) // 返回一个“扩展实例构造器”

let CToast = (option = {}) => { // 参数
  return new ToastConstructor().init(option)
}
// init:text,timing
ToastConstructor.prototype.init = function (option = {}) {
  this.vm = this.$mount()
  console.log(typeof option)
  if (typeof option !== 'object') {
    this.text = option
  } else {
    this.text = option.text
  }
  this.timing = option.timing || 2500
  this.position = option.position || 'default'
  this.visible = true
  document.body.appendChild(this.$el)
  setTimeout(() => {
    this.close()
  }, this.timing)
}
// 实现toast的关闭方法
ToastConstructor.prototype.close = function () {
  this.visible = false
  document.body.removeChild(this.$el)
}
export default CToast
