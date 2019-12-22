import API from '@/api'

const getInitialState = () => ({
    user: null,
    token: null,
    activated: false,
    pass: null,
})

const state = getInitialState()

const getters = {
    getToken: (state) => state.token,
    getActivated: (state) => state.activated,
    getUser: (state) => state.user,
    getPass: (state) => state.pass,
    isAuthed: (state) => ( getters.isActivated(state) && state.token !== null),
    isActivated: (state) => (state.activated && state.user !== null),
}

const actions = {
    async activate({ commit }, user) {
        await API.auth.activate(user)

        commit('setActivated', user)
    },
    activated({ commit }, user) {
        commit('setActivated', user)
    },
    async login({ commit }, { user, pass }) {
        const token = await API.auth.login(user, pass)

        commit('setPass', pass)
        commit('setToken', token)
    },
    clearAuth({ commit }) {
        commit('clearAuth')
    },
}

const mutations = {
    setToken: (state, token) => (state.token = token),
    setPass: (state, pass) => (state.pass = pass),
    setActivated: (state, user) => Object.assign(state, { user, activated: true }),
    clearAuth: (state) => Object.assign(state, getInitialState())
}

export default {
    state,
    getters,
    actions,
    mutations,
}
