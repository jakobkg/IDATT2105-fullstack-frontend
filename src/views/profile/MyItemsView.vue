<script>
import { useAuthStore } from "@/store/authStore";
import { mapState, mapStores } from "pinia";
import { API } from '@/util/API';
import ItemCard from "@/components/ItemCard.vue";

export default {
  data() {
    return {
      items: [],
    }
  },
  components: {
    ItemCard,
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ['user'])
  },

  methods: {
    async loadData() {
      const response = await API.Loftet.listItemsBasedOnUserId(1, this.user.id);
      this.items = response;
    }
  },
  mounted() {
    this.loadData();
  }
}
</script>
<template>
  <div></div>
  <main v-if="this.authStore.isLoggedIn()">
    <h1>Mine annonser</h1>
    <a href="/profile">Gå tilbake til profilsiden</a>
    <div v-if="!(items.length > 0)" class="items">
      <p>Loading...</p>
    </div>
    <div v-else class="items">
      <li style="list-style-type: none" v-for="item in items">

        <ItemCard
          :image = "item.images"
          :label = "item.title"
          :price = "item.price + 'kr'"
          :location = "item.latitude"
          :date = "item.date"
          :itemId = "item.id"
          :userId = "item.userId"
        />
      </li>
    </div>
  </main>

  <main v-else>
    <h1>Du er ikke innlogget.</h1>
  </main>
</template>

<style scoped lang="scss">



</style>