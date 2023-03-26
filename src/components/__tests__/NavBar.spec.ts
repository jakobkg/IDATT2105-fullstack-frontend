import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'
import { createTestingPinia } from '@pinia/testing';
import persistedState from "pinia-plugin-persistedstate";
import { useAuthStore } from '@/store/authStore';

describe('NavBar', () => {

  it('renders properly when not logged in', () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [createTestingPinia({
          stubActions: false,
          createSpy: vi.fn,
          plugins: [persistedState],
        })],
      },
    });

    // The initial state of the auth store is not logged in, so the navbar should only have the login button
    useAuthStore();
    expect(wrapper.text()).toContain('Logg inn');
  });

  it('renders properly when logged in', () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [createTestingPinia({
          stubActions: false,
          createSpy: vi.fn,
          plugins: [persistedState],
          initialState: {
            auth: {
              token: "non-empty test token"
            }
          }
        })],
      },
    });

    // The initial state of the auth store has been set to contain a token, so the nav bar should be populated
    useAuthStore();
    expect(wrapper.text()).toContain('Profil');
  })
})

