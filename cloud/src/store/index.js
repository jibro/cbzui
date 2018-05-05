/**
 * Created by Administrator on 2016/3/15.
 */

import Vuex from 'vuex'
import Vue from 'vue'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  menuData: [],
  selectedKey: '',
  userInfo: ''
}

export default new Vuex.Store({
  state,
  actions,
  getters: getters,
  mutations
})
