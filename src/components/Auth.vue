<template>
    <form novalidate class="md-layout" @submit.prevent>
        <md-dialog :md-active="!isActivated">
                    <md-dialog-title>Aktivácia</md-dialog-title>
                    <md-dialog-content>
                        <md-field :class="getValidationClass('user')">
                            <label for="user">Užívateľské číslo</label>
                            <md-input name="user" id="user" v-model="user" :disabled="sending" />
                            <span class="md-error" v-if="!$v.user.required">Užívateľské číslo je nutné zadať</span>
                            <span class="md-error" v-else-if="!$v.user.minlength">Nesprávny formát čísla</span>
                        </md-field>
                    </md-dialog-content>

                    <md-dialog-actions>
                        <md-button type="button" class="md-primary" 
                            :disabled="sending || $v.user.$invalid"
                            @click="handleActivate"
                        >
                            Preskočiť
                        </md-button>
                        <md-button type="button" class="md-primary" 
                            :disabled="sending || $v.user.$invalid"
                        >
                            Aktivovať
                        </md-button>
                    </md-dialog-actions>
        </md-dialog>
        <md-dialog :md-active="isActivated && !isAuthed">
            <form novalidate class="md-layout" @submit.prevent>
                    <md-dialog-title>Prihlásenie</md-dialog-title>
                    <md-dialog-content>
                        <md-field :class="getValidationClass('password')">
                            <label for="password">Heslo</label>
                            <md-input name="password" id="password" type="password" v-model="password" :disabled="sending" />
                            <span class="md-error" v-if="!$v.password.required">Heslo je nutné zadať</span>
                            <span class="md-error" v-else-if="!$v.password.minlength">Nesprávny formát hesla</span>
                        </md-field>
                    </md-dialog-content>

                    <md-dialog-actions>
                        <md-button type="button" class="md-primary" 
                            :disabled="sending || $v.password.$invalid"
                            @click="handleLogin"
                        >
                            Prihlásiť sa
                        </md-button>
                    </md-dialog-actions>
            </form>
        </md-dialog>
    </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
import sha256 from 'sha256'

export default {
    name: 'Auth',
    mixins: [validationMixin],
    data: () => ({
        user: null,
        password: null,
        sending: false,
    }),
    validations: {
        user: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(10),
        },
        password: {
            required,
            minLength: minLength(4),
        },
    },
    computed: mapGetters(['isAuthed', 'isActivated', 'getDonations']),
    methods: {
        ...mapActions(['activate', 'activated', 'login']),
        handleActivate() {
            this.activated(this.user)
        },
        handleLogin() {
            this.login({
                user: this.user,
                pass: sha256(this.password),
            })
        },
        getValidationClass (fieldName) {
            const field = this.$v[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
    }
}
</script>

<style lang="stylus" scoped>
.md-layout
    flex-direction column
</style>