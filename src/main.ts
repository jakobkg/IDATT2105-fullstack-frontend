import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import { useCategoryStore } from "./store/categoryStore";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

app.use(pinia);
app.use(router);

const categoryStore = useCategoryStore();
categoryStore.populate();

app.mount("#app");
