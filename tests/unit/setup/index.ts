import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { createLocalVue, config } from '@vue/test-utils'
import Vue from 'vue'

config.logModifiedComponents = false
const storeSim: { [key: string]: string; } = {}
const localVueSingle = createLocalVue()
localVueSingle.config.silent = true
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vuex)
global.localVue = localVueSingle
global.console = {
  ...global.console,
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
}
Vue.prototype.$analytics = {
  track: (obj: any) => obj,
}

global.window.localStorage = {
  getItem: (key: string) => storeSim[key],
  setItem: (key: string, value: any) => storeSim[key] = value,
}
