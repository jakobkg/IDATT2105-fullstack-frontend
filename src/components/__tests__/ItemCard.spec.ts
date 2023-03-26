import ItemCard from "../ItemCard.vue";
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing';
import persistedState from "pinia-plugin-persistedstate";

const KEYWORD = "TEST";

describe("ItemCard", () => {
    it("Renders properly", () => {
        const wrapper = mount(ItemCard, {
            global: {
              plugins: [createTestingPinia({
                createSpy: vi.fn,
                plugins: [persistedState]
              })],
            },
            props: {
              item: {
                id: 9999999,
                title: KEYWORD,
                images: "https://masteringjs.io/assets/images/vue/vue-spelled-out.jpg",
                price: "100",
                location: "Trondheim",
                latitude: "",
                longitude: "",
                date: "25.03.2022",
              } as Item,
              isBookmarked: true
            }
          })
        
        expect(wrapper.text()).toContain(KEYWORD);
    })
})