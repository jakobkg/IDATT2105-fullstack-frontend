

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

      <div class="items">
        <ItemCard
          image = 'https://media.houseandgarden.co.uk/photos/618944690a583de660124d52/master/w_1600%2Cc_limit/1-house-29mar17-Nick-Pope_b.jpg'
          label = "Plante Plante Plante Plante Plante Plante Plante Plante"
          price = '50kr'
          location = 'Trondheim'
          date = '22.03.2022'
          itemId = '1'
          isBookmarked
        />

        <ItemCard
          image = 'https://media.houseandgarden.co.uk/photos/618944690a583de660124d52/master/w_1600%2Cc_limit/1-house-29mar17-Nick-Pope_b.jpg'
          label = "Plante Plante Plante Plante"
          price = '50kr'
          location = 'Trondheim'
          date = '22.03.2022'
          itemId = '1'

        />
        <ItemCard
          image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Theodor_Kittelsen_-_Far%2C_far_away_Soria_Moria_Palace_shimmered_like_Gold_-_Google_Art_Project.jpg/1920px-Theodor_Kittelsen_-_Far%2C_far_away_Soria_Moria_Palace_shimmered_like_Gold_-_Google_Art_Project.jpg'
          label = "Et maleri"
          price = '700kr'
          location = 'Oslo'
          date = '19.03.2021'
          itemId = '2'

        />
        <ItemCard
          image = 'https://media.houseandgarden.co.uk/photos/618944690a583de660124d52/master/w_1600%2Cc_limit/1-house-29mar17-Nick-Pope_b.jpg'
          label = "Plante Plante Plante Plante Plante Plante Plante Plante Plante Plante Plante Plante"
          price = '50kr'
          location = 'Trondheim'
          date = '22.03.2022'
          itemId = '1'

        />
        <ItemCard
          image = 'https://media.houseandgarden.co.uk/photos/618944690a583de660124d52/master/w_1600%2Cc_limit/1-house-29mar17-Nick-Pope_b.jpg'
          label = "Plante"
          price = '50kr'
          location = 'Trondheim'
          date = '22.03.2022'
          itemId = '1'

        />
        <ItemCard
          image = 'https://media.houseandgarden.co.uk/photos/618944690a583de660124d52/master/w_1600%2Cc_limit/1-house-29mar17-Nick-Pope_b.jpg'
          label = "Plante"
          price = '50kr'
          location = 'Trondheim'
          date = '22.03.2022'
          itemId = '1'

        />
 


      </div>
    </div>
  





  </main>
</template>

<script lang="ts">
  import ItemCard from '@/components/ItemCard.vue';

  export default {
    name: "HomeView",
    data() {
      return {
        input: "",
        mapButtonText: "Vis kart",
        searchPlaceholder: "Søk etter annonser..."
      }
    },
    components: {
      ItemCard,
    }
  }



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