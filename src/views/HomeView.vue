

<template>
  <main>
    <div class="content">
      <div class="search-wrapper">
        <input class="search-bar" type="text" v-model="input" placeholder="Søk etter annonser..." />
      </div>

      <div class="filter">
        <button>Map</button>
        <button>Filter</button>
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

<script setup>
  import ItemCard from '@/components/ItemCard.vue';



</script>

<style>

  .search-wrapper {
    /* margin: 0 15px; */
  }
  
  .search-bar {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border-width: 1px;
    border: solid 1px #999;

  }

  .content {
    margin: 0 15px;
  }

  .filter {
    text-align: left;
  }

</style>