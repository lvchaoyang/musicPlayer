import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import creatLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NOOD_ENV !== 'prodution'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [creatLogger()] : []
})
