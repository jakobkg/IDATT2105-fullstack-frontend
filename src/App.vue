<script lang="ts">
import RouterView from 'vue-router';
import NavBar from "@/components/NavBar.vue";
import Item from "@/components/Item.vue";
export default {
  components: { Item, NavBar}
};
</script>

<template>
  <NavBar/>
  <Item />
  <RouterView />
</template>

<style lang="scss">
@import "@/style.scss";
</style>
