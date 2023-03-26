import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Footer from '../Footer.vue'

describe('Footer', () => {
  it('renders properly', () => {
    const wrapper = mount(Footer);
    expect(wrapper.text()).toContain('Gruppe 2');
  })
})
