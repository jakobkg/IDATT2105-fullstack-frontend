<script lang="ts">
import RouterView from 'vue-router';
import NavBar from "@/components/NavBar.vue";
export default {
  components: {NavBar}
};
</script>

<template>
  <NavBar/>

  <RouterView />
</template>

<style>
@import "@/style.scss";

</style>
