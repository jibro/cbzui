import czbToast from './toast/index'
import czbMsgBox from './msg-box/index'
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
  Vue.prototype.$toast = czbToast
  Vue.prototype.$msgbox = czbMsgBox
}

export default{
  install
}
export {
  czbToast,
  czbMsgBox,
  czbButton,
  czbTab,
  czbInput,
  czbRadio,
  czbCheckbox,
  czbSelect,
  czbCascader,
  czbDatepacker
}
