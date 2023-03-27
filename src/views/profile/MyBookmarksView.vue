<script>
import { useAuthStore } from "@/store/authStore";
import { mapState, mapStores } from "pinia";
import { API } from '@/util/API';
import ItemCard from "@/components/ItemCard.vue";

export default {
  data() {
    return {
      items: [],
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

  mounted() {
    API.Loftet.getBookmarks().then(response =>{
        response.forEach(e => {
            API.Loftet.getItem(e.bookmarkId.itemId).then(item => {
                this.items.push(item);
            })
        })
    })
    .catch(() => {
        this.loading = false;
        throw new Error();
    });
    this.loading = false;
  }
}
</script>
<template>
  <div></div>
  <main v-if="this.authStore.isLoggedIn">
    <h1>Mine bokmerker</h1>
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