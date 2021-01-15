import Vue from 'vue'
import Vuex from 'vuex'

//安装vuex
Vue.use(Vuex)

import mutation from './mutations.js'

const state = {
    data() {
        return {
            token
        }
    }
}

const store = Vuex.Store({
    state,
    mutation,
    active,
    getters,
})

export default store