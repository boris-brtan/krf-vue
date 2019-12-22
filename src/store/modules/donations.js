import API from '@/api'

const state = {
    donations: [],
}

const getters = {
    getDonations: (state) => state.donations
}

const actions = {
    async fetchDonations({ commit }, token) {
        const donations = await API.user.donations(token)

        commit('setDonations', donations)
    },
}

const mutations = {
    setDonations: (state, donations) => state.donations = donations
}

export default {
    state,
    getters,
    actions,
    mutations,
}
