import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import user from './modules/user'
import donation from './modules/donation'
import donations from './modules/donations'
import settings from './modules/settings'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        user,
        donation,
        donations,
        settings,
    }
})
