import { shallowMount } from '@vue/test-utils'
import Auth from '@/components/Auth.vue'

describe('Auth.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Auth, {})
    expect(wrapper.text()).toMatch('Aktivácia')
  })
})
