import API from '@/api'

const state = {
    info: {},
    result: [],
    param: [],
}

const getters = {
    getDonationInfo: (state) => state.info,
    getDonationResult: (state) => state.result,
    getDonationParam: (state) => state.param,
}

const actions = {
    async fetchDonation({ commit }, { token, id }) {
        const info = await API.user.donation(token, id)

        commit('setDonationInfo', info)
    },
    async fetchDonationResult({ commit }, { token, id }) {
        const result = await API.user.donationResult(token, id)

        commit('setResult', result)
    },
    async fetchDonationParam({ commit }, { token, id, paramId }) {
        const param = await API.user.donationResultParam(token, id, paramId)

        commit('setParam', param)
    },
}

const mutations = {
    setDonationInfo: (state, info) => {
        state.info = info
    },
    setResult: (state, result) => state.result = result,
    setParam: (state, param) => state.param = param,
}

export default {
    state,
    getters,
    actions,
    mutations,
}
