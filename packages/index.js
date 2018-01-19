import CToast from './toast/index'
import CMsgBox from './msg-box/index'
import czbButton from './czb-button/czb-button'
import czbInput from './czb-input/czb-input'
import czbRadio from './czb-radio/czb-radio'
import czbCheckbox from './czb-checkbox/czb-checkbox'
import czbTab from './czb-tab/czb-tab'
import czbSelect from './czb-select/czb-select'
import czbCascader from './czb-cascader/czb-cascader'
import czbDatepacker from './czb-datepacker/czb-datepacker'

const components = [
  czbButton,
  czbTab,
  czbInput,
  czbRadio,
  czbCheckbox,
  czbSelect,
  czbCascader,
  czbDatepacker
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$toast = CToast
  Vue.prototype.$msgbox = CMsgBox
}

export default{
  install
}
export {
  CToast,
  CMsgBox,
  czbButton,
  czbTab,
  czbInput,
  czbRadio,
  czbCheckbox,
  czbSelect,
  czbCascader,
  czbDatepacker
}
