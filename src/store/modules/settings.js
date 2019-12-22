import API from '@/api'

const state = {
    params: [],
}

const getters = {
    getSettings: (state) => state.params
}

const actions = {
    async fetchSettingsParams({ commit }, token) {
        const params = await API.settings.params(token)

        commit('setSettingsParams', params)
    }
}

const mutations = {
    setSettingsParams: (state, params) => state.params = params,
}

export default {
    state,
    getters,
    actions,
    mutations,
}
