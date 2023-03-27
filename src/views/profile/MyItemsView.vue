<script lang="ts">
import { useAuthStore } from "@/store/authStore";
import { mapState, mapStores } from "pinia";
import { API } from '@/util/API';
import ItemCard from "@/components/ItemCard.vue";

export default {
  data() {
    return {
      items: [] as Array<Item>,
      loading: true,
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
    },
  },
  mounted() {
    this.loadData();
    this.loading = false;
  }
}
</script>
<template>
  <div></div>
  <main v-if="authStore.isLoggedIn">
    <h1>Mine annonser</h1>
    <a href="/profile">Gå tilbake til profilsiden</a>
    <div v-if=loading class="items">
      <p>Laster inn...</p>
    </div>
    <div v-if="!(items.length > 0)" class="items">
      <p>Ingen resultater</p>
    </div>
    <div v-else class="items">
      <li style="list-style-type: none" v-for="item in items">

        <ItemCard :item="item" />
      </li>

    </div>
  </main>

  <main v-else>
    <h1>Du er ikke innlogget.</h1>
  </main>
</template>

<style scoped lang="scss">

    .items {
      width: 100%;
    }

</style>