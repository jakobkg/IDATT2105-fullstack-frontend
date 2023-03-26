import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'
import { beforeEach } from "node:test";
import { setActivePinia, createPinia } from 'pinia';

describe('NavBar', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        
    });

  it('renders properly', () => {
    const wrapper = mount(NavBar);
    expect(wrapper.text()).toContain('Profil');
  })
})

