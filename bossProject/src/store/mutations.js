export const initMenuData = (state, data) => {
  state.menuData = data
}
export const toSelectedKey = (state, key) => {
  state.selectedKey = key
}
export const saveUserInfo = (state, obj) => {
  state.userInfo = obj
}