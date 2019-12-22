<template>
    <md-list>
        <md-list-item 
            v-for="donation in getDonations" :key="donation.Id"
            @click="handleDonation(donation.Id)"
        >
            <span class="md-list-item-text">
                {{ donation.Pracovisko }}
            </span>
            <span class="md-list-item-text">
                {{ new Date(donation.DatumOdberu).toLocaleDateString() }}
            </span>
            <span class="md-list-item-text">
                {{ donation.TypOdberu }}
                <br />
                {{ donation.MnozstvoMl }} ml
            </span>
        </md-list-item>
    </md-list>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
    name: 'home',
    components: {},
    computed: mapGetters([
        'getDonations',
        'getToken',
        'getSettings',
        'getUserData',
        'getUser',
        'getPass',
    ]),
    methods: {
        ...mapActions([
            'fetchDonations',
            'fetchDonation', 'fetchDonationResult',
            'fetchSettingsParams', 'fetchUserData',
            'login',
        ]),
        async handleDonation(id) {
            try {
                await Promise.all([
                    this.fetchDonation({ token: this.getToken, id }),
                    this.fetchDonationResult({ token: this.getToken, id }),
                ])
                this.$router.push('/donation/' + id)
            } catch(ex) {
                await this.login({
                    user: this.getUser,
                    pass: this.getPass
                })
                await Promise.all([
                    this.fetchDonation({ token: this.getToken, id }),
                    this.fetchDonationResult({ token: this.getToken, id }),
                ])
                this.$router.push('/donation/' + id)
            }
        },
    },
    mounted() {
        if(this.getSettings.length === 0) {
            this.fetchSettingsParams(this.getToken)
        }
        if(this.getDonations.length === 0) {
            this.fetchDonations(this.getToken)
        }
        if(this.getUserData.Meno === null) {
            this.fetchUserData(this.getToken)
        }
    },
}
</script>

<style lang="stylus" scoped>
.md-list-item-text:nth-child(2)
    align-items: center
.md-list-item-text:nth-child(3)
    align-items: flex-end
</style>