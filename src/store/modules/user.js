import API from '@/api'

const state = {
    TerminNasledOdberu: null,
    KrvnaSkupina: null,
    Fenotyp: null,
    FenotypAsString: null,
    Pohlavie: null,

    Meno: null,
    Priezvisko: null,
    RodneCislo: null,
    DomovskePracovisko: null,
    PocetOdberov: null,
    KrvnaSkupinaPopis: null,
    FenotypAsText: null,
    Poistovna: null,
    KrvnaSkupinaZaklad: null,
}

const getters = {
    getUserData: (state) => state
}

const actions = {
    async fetchUserData({ commit }, token) {
        try {
            const userData = await API.user.home(token)
            const userCard = await API.user.card(token)

            commit('setUserData', {
                ...userData,
                ...userCard,
            })
        } catch(ex) {
            // expired
        }
    },
}

const mutations = {
    setUserData: (state, userData) => Object.assign(state, { ...userData }),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
