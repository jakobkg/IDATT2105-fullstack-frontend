<script lang="ts">
  import ItemCard from '@/components/ItemCard.vue';
  import { useCategoryStore } from '@/store/categoryStore';
  import { mapState } from 'pinia';
  import { API } from '@/util/API';

  export default {
    name: "HomeView",
    data() {
      return {
        input: "",
        mapButtonText: "Vis kart",
        searchPlaceholder: "Søk etter annonser...",
        items: [] as any,
        dataLoaded: false
      }
    },
    components: {
      ItemCard,
    },
    //  computed: {
    //   ...mapState(useCategoryStore, ['categories']),
    // }, 

    methods: {
      async loadData() {
        const response = await API.Loftet.listItems(1);
        this.items = response;
      },
      goToItem(id: number) {
        API.Loftet.goToItem(id);
      }
    },
    mounted() {
      this.loadData();
    }
  }
</script>

<template>
  <main>    
    <div class="content">
      <div class="search-wrapper">
        <input class="search-bar" type="text" v-model="input" :placeholder=searchPlaceholder />
      </div>

      <div class="filter">
        <button class="map-button">
          <img src='\static\Icons\marker.svg'/>
          <p>{{ mapButtonText }}</p>
        </button>
        <button>Filter</button>
      </div>

      <div v-if="!(items.length > 0)" class="items">
        <p>Loading...</p>
      </div>
      <div v-else class="items">
        <li style="list-style-type: none" v-for="item in items" @click="goToItem(item.id)">
        
          <ItemCard
            :image = "item.images"
            :label = "item.title"
            :price = "item.price + 'kr'"
            :location = "item.latitude"
            :date = "item.date"
            :itemId = "item.id"
          />
        </li>

      </div>
    </div>
  
  </main>
</template>

<style lang="scss">

  .search-bar {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border-width: 1px;
    border: solid 1px #999;

  }

  .search-wrapper {
    min-width: 270px;
  }

  .content {
    // margin: 0 15px;
    width: 100%;

  }

  .filter {
    text-align: left;
    display: flex;
    gap:10px;
    margin-top: 15px;
    margin-bottom: 15px;
    
    .map-button {
      display: flex;
    }

    p {
      margin: 0 0;
      padding-left: 5px;
    }

    img {
      max-height: 20px;
    }
  }

</style>