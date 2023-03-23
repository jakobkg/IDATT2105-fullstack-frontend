<script setup>
import ItemCard from '@/components/ItemCard.vue';

export default {
  data() {
    return {

    }
  },
  methods {
    
  },
}

</script>

<template>
  <main>
    <div class="content">
      <div class="search-bar">
        <input type="text" v-model="input" placeholder="Search fruits..." />
      </div>

      <div class="filter">

      </div>

      <div class="items">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  





  </main>
</template>

<style>
</style>