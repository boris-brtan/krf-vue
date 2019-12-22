<template>
    <div>
        <Auth v-if="!isAuthed" />
        <md-app v-else>
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Slovenské darovanie krvi</span>
            </md-app-toolbar>

            <md-app-drawer 
                :md-active.sync="menuVisible" md-persistent="full"  md-swipeable
                @md-opened="handleTransitionEnd" @md-closed="handleTransitionEnd"
            >
                <md-toolbar class="md-transparent" md-elevation="0">
                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                    </div>
                </md-toolbar>

                <md-list>
                    <md-list-item to="/">
                        <md-icon>list</md-icon>
                        <span class="md-list-item-text">Odbery</span>
                    </md-list-item>

                    <md-list-item to="/user">
                        <md-icon>person</md-icon>
                        <span class="md-list-item-text" >User</span>
                    </md-list-item>

                    <md-list-item @click="clearAuth">
                        <md-icon>power_settings_new</md-icon>
                        <span class="md-list-item-text">Ohlásiť sa</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <router-view />
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
import Auth from '@/components/Auth.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'PersistentFull',
    components: {
        Auth
    },
    data: () => ({
        menuVisible: false
    }),
    methods: {
        ...mapActions(['clearAuth']),
        toggleMenu() {
            this.menuVisible = !this.menuVisible
        },
        handleTransitionEnd() {
            clearTimeout(this.drawerTimeout)
            this.drawerTimeout = setTimeout(() => window.dispatchEvent(new Event('resize')), 100)
        },
    },
    computed: mapGetters(['isAuthed']),
}
</script>

<style lang="stylus" scoped>
.md-app
    height: 100vh
    border: 1px solid rgba(#000, 0.12)

.md-drawer
    width: 230px
    max-width: calc(100vw - 125px)

.md-app-toolbar
    position: sticky
</style>