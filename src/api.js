const API_URL = 'https://krv.roxor.cloud/API'

const API = {
    auth: {
        activate: async (user) => {
            const response = await fetch(API_URL + '/Authentication/ActivateRequest', {
                method: 'POST',
                headers: {
                    evc: user,
                },
                body: JSON.stringify({
                    evc: user,
                }),
            })
            const token = await response.json()

            return token
        },
        login: async (user, pass) => {
            const response = await fetch(API_URL + '/Authentication/login', {
                headers: {
                    evc: user,
                    pin: pass,
                },
            })
            const token = await response.json()

            return token
        }
    },
    user: {
        home: async (token) => {
            const response = await fetch(API_URL + '/darca/Vitajte', {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const userInfo = await response.json()

            return userInfo
        },
        card: async (token) => {
            const response = await fetch(API_URL + '/darca/PreukazDarcu', {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const userInfo = await response.json()

            return userInfo
        },
        donations: async (token) => {
            const response = await fetch(API_URL + '/darca/odber', {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const donations = await response.json()

            return donations
        },
        donation: async (token, id) => {
            const response = await fetch(API_URL + `/darca/odber/${id}`, {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const donation = await response.json()

            return donation
        },
        donationResult: async (token, id) => {
            const response = await fetch(API_URL + `/darca/odber/${id}/lvko`, {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const donation = await response.json()

            return donation
        },
        donationResultParam: async (token, id, paramId) => {
            const response = await fetch(API_URL + `/darca/lvko/${paramId}/${id}`, {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const donation = await response.json()

            return donation
        },
    },
    settings: {
        params: async (token) => {
            const response = await fetch(API_URL + '/ciselniky/ParametreKO', {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const bloodSettings = await response.json()

            return bloodSettings
        },
    },
}

export default API
