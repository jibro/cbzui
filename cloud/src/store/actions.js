export const initMenuData = ({ commit }, data) => {
  commit('initMenuData', data)
}
export const selectedKeyAction = ({ commit }, key) => {
  commit('toSelectedKey', key)
}
export const toSaveUserInfo = ({ commit }, obj) => {
  commit('saveUserInfo', obj)
}