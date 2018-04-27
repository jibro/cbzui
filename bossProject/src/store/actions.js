export const initMenuData = ({ commit }, data) => {
  commit('initMenuData', data)
}
export const selectedKeyAction = ({ commit }, key) => {
  commit('toSelectedKey', key)
}