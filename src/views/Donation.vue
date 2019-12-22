<template>
    <div>
        <Chart :data="getDonationParam" :title="title" />
        <md-list>
            <md-list-item class="md-elevation-2">
                <span class="text-center">
                {{
                    new Date(getDonationInfo.Zaciatok).toLocaleString().replace(',', '')
                    + ' - ' +
                    new Date(getDonationInfo.Koniec).toLocaleTimeString()
                }}
                </span>
            </md-list-item>
            <md-list-item
                v-for="(settingsParam, idx) in getSettings"
                :key="settingsParam.Id"
                @click="loadDonationResultParam(settingsParam)"
                class="md-elevation-2"
            >
                <div class="padding-10">
                    <span class="md-body-2">{{ settingsParam.Nazov }}</span>
                    <br />
                    <span class="md-body-1">
                        {{ (getDonationResult[idx] || {}).Hodnota || 0 }}
                        {{ settingsParam.MernaJednotka }}
                    </span>
                </div>
            </md-list-item>
        </md-list>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Chart from '@/components/Chart.vue'

export default {
    name: 'donation',
    components: {
        Chart
    },
    computed: mapGetters([
        'getToken', 'getSettings', 'getUser', 'getPass',
        'getDonationInfo', 'getDonationResult', 'getDonationParam',
    ]),
    data() {
        return {
            title: '',
        }
    },
    methods: {
        ...mapActions(['fetchDonationParam', 'login']),
        async loadDonationResultParam(param) {
            this.title = param.Nazov
            try {
                await this.fetchDonationParam({
                    token: this.getToken,
                    id: this.$route.params.id,
                    paramId: param.Id,
                })
            } catch(ex) {
                await this.login({
                    user: this.getUser,
                    pass: this.getPass
                })
                await this.fetchDonationParam({
                    token: this.getToken,
                    id: this.$route.params.id,
                    paramId: param.Id,
                })
            }
        },
    },
}
</script>

<style lang="stylus" scoped>
.md-list-item-container
    white-space: normal
.text-center
    flex: 1
    text-align: center
.md-list
    display: flex
    flex-direction: row
    flex-wrap: wrap
.md-list-item
    display: flex
.md-list-item:nth-child(1)
    width: 100%
.md-list-item:nth-child(n+2)
    flex: 1
    min-width: 160px
.md-list-item:last-child
    display: none
.md-list-item-button
    height: 100%
.md-body-1
    white-space: nowrap
.padding-10
    padding: 10px
</style>