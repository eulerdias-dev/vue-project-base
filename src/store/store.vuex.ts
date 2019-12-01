import Vue from 'vue'
import Vuex from 'vuex'
import { extractVuexModule, createProxy } from 'vuex-class-component'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    //...extractVuexModule()
  }
})

export const vxm = {
  //name: createProxy(store, name)
}

export default store