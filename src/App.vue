<script lang="ts">
import RouterView from 'vue-router';
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { useCategoryStore } from './store/categoryStore';

export default {
  components: {Footer, NavBar},
  beforeMount: () => {
    const categoryStore = useCategoryStore();
    categoryStore.populate();
  }
};
</script>

<template>
  <NavBar/>
  <div class="content-wrapper">
    <RouterView />
  </div>
  <Footer/>
</template>

<style lang="scss">
@import "@/style.scss";

</style>
