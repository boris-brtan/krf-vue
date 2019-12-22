<template>
    <md-card>
        <md-card-header>
            <md-avatar class="md-avatar-icon md-accent">
                {{ getUserData.Meno[0] }}
            </md-avatar>
            <div class="md-title">{{ getUserData.Meno }}</div>
            <div class="md-subhead">{{ getUserData.KrvnaSkupina + ' ' + getUserData.FenotypAsString }}<br />{{ getUserData.Poistovna }}</div>
        </md-card-header>
        <md-card-content>
            <md-divider />
            <md-list>
                <md-list-item>
                    <span class="md-list-item-text">
                        <div class="md-title">Počet odberov</div>
                        <div class="md-subhead">{{ getUserData.PocetOdberov }}</div>
                    </span>
                </md-list-item>
                <md-list-item>
                    <span class="md-list-item-text">
                        <div class="md-title">Nasledujúci odporúčaný odber</div>
                        <div class="md-subhead">{{ new Date(getUserData.TerminNasledOdberu).toLocaleDateString() }}</div>
                    </span>
                </md-list-item>
                <md-list-item>
                    <span class="md-list-item-text">
                        <div class="md-title">Registrované pracovisko</div>
                        <div class="md-subhead">{{ getUserData.DomovskePracovisko }}</div>
                    </span>
                </md-list-item>
            </md-list>
        </md-card-content>
    </md-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'User',
    computed: mapGetters(['getUserData']),
}
</script>

<style lang="stylus" scoped>
.md-avatar
    margin-top: 8px
.md-list-item-text
    .md-title
        font-size: 16px
</style>