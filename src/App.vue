<script lang="ts">
import RouterView from 'vue-router';
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {Footer, NavBar}
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
