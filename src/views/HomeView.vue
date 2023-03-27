<script lang="ts">
  import ItemCard from '@/components/ItemCard.vue';
  import { API } from '@/util/API';
  import Map from "@/components/Map.vue";

  export default {
    name: "HomeView",
    data() {
      return {
        showMap: false,
        input: "",
        mapButtonText: "Vis kart",
        searchPlaceholder: "Søk etter annonser...",
        items: [] as Item[],
        dataLoaded: false
      }
    },
    components: {
      Map,
      ItemCard,
    },

    methods: {
      async loadData() {
        const response = await API.Loftet.listItems(1);
        this.items = response;
      },
      goToItem(id: number) {
        API.Loftet.goToItem(id);
      },
      async search(searchterm: string) {
        if (searchterm.length === 0) {
          API.Loftet.listItems(1).then((items: Item[]) => {
            this.items = items;
          })
        } else {
          API.Loftet.searchItems(searchterm).then((searchresult: Item[]) => {
            this.items = searchresult;
          });
        }
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
        <input class="search-bar" type="text" v-model="input" @change="search(input)" :placeholder=searchPlaceholder />
      </div>

      <div class="filter">
        <button @click="()=> {showMap = !showMap}" class="map-button">
          <img src='\static\Icons\marker.svg'/>
          <p>{{ mapButtonText }}</p>
        </button>

        <button>Filter</button>
      </div>
      <Map v-if="showMap" :items=items />
      <div v-if="!(items.length > 0)" class="items">
        <p>Loading...</p>
      </div>
      <div v-else class="items">
        <li style="list-style-type: none" v-for="item in items" >
        
          <ItemCard :item="item" />
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