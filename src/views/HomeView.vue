

<template>
  <main>
    <div class="content">
      <div class="search-wrapper">
        <input class="search-bar" type="text" v-model="input" :placeholder=searchPlaceholder />
      </div>

      <div class="filter">
        <button class="map-button">
          <img src='..\..\public\static\Icons\marker.svg'/>
          <p>{{ mapButtonText }}</p>
        </button>
        <button>Filter</button>
      </div>

      <div v-if="!(items.length > 0)" class="items">
        <p>Loading...</p>
      </div>
      <div v-else class="items">
        <li style="list-style-type: none" v-for="item in items">
        
          <ItemCard
            :image = "item.images"
            :label = "item.title"
            :price = "item.price"
            :location = "item.latitude"
            :date = "item.date"
            :itemId = "item.id"
          />
        </li>

      </div>
    </div>
  





  </main>
</template>

<script lang="ts">
  import ItemCard from '@/components/ItemCard.vue';
  import axios from 'axios';
  

  export default {
    name: "HomeView",
    data() {
      return {
        input: "",
        mapButtonText: "Vis kart",
        searchPlaceholder: "Søk etter annonser...",
        items: [] as Array<{id: number, images: string, title: string, date: string, latitude: string, price: string }>,
        dataLoaded: false
      }
    },
    components: {
      ItemCard,
    },

  
    // beforeMount() {
    //   axios.get(import.meta.env.VITE_BACKEND_URL + '/item?page=1')
    //   .then(response => {
    //     this.items.push(response.data.content);
    //     console.log(this.items);
    //   })
    //   .catch(err => console.log(err))
    // }

    methods: {
      async loadData() {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/item?page=1')
        this.items = response.data.content;
      }
    },
    mounted() {
      this.loadData();
    }

    // async created() {
    //   await this.loadData(3000);
    //   this.dataLoaded = true;
    // }


  }



</script>

<script setup lang="ts">


  
</script>

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
    margin: 0 15px;
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

    button {
      border-color: #999;
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