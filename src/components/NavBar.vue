<template>
  <nav>
    <Logo />

    <ul v-if="isLoggedIn">
      <NavElement navText="Ny annonse" pageLink="/newItem" imageLink='\static\Icons\add.svg' />
      <NavElement navText="Profil" pageLink="/profile" imageLink="\static\Icons\user.svg" />
      <NavElement navText="Logg ut" imageLink="\static\Icons\Logout.png" @click="authStore.logout()" />
    </ul>
    <NavElement v-else navText="Logg inn" pageLink="/login" imageLink="\static\Icons\login.svg" />
  </nav>
  <br>
</template>

<script lang="ts">
import NavElement from "@/components/NavElement.vue";
import Logo from "@/components/Logo.vue";

import { useAuthStore } from "@/store/authStore";
import { mapState, mapStores } from "pinia";

export default {
  name: "NavBar",
  components: {Logo, NavElement},
  computed: {
    ...mapState(useAuthStore, ["isLoggedIn"]),
    ...mapStores(useAuthStore)
  }
}
</script>

<style scoped lang="scss">

nav {
  width: 100%;
  background-color: White;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
}

ul{
  list-style-type: none;
  margin: 0;
  padding: 0;

}

</style>
