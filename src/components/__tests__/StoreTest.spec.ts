// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '@/store/authStore'
import { beforeEach } from "node:test";
import { createApp } from 'vue'
import {it, describe, expect} from 'vitest';


describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const authStore = useAuthStore()
    expect(authStore.user).toBe(null)
  })

})
