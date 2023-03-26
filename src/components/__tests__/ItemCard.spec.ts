import ItemCard from "../ItemCard.vue";
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { beforeEach } from "node:test";
import { setActivePinia, createPinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';
import { useAuthStore } from "@/store/authStore";




describe("ItemCard", () => {

    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
      })

        const store = useAuthStore() // uses the testing pinia!
        // state can be directly manipulated
        store.user = {
            id: 9999,
            type: "USER",
            firstname: 'test',
            lastname: 'testesen',
            email: 'test@test.no',
            streetAddress: 'Testegata 1',
            postCode: 7049,
            city: 'Trondheim'
        }

    it("Renders properly", () => {
        const wrapper = mount(ItemCard, {
            global: {
              plugins: [createTestingPinia()],
            },
            props: {
                image: "https://masteringjs.io/assets/images/vue/vue-spelled-out.jpg",
                label: "Test",
                price: "100",
                location: "Trondheim",
                date: "25.03.2022",
                itemId: 9999999,
                isBookmarked: false
            }
          })
          


        expect(wrapper.text()).toContain("Test");
    })
})