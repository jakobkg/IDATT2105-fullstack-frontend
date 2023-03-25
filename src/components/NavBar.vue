<template>
  <nav>
    <Logo />

    <ul v-if="token.length > 0">
      <NavElement navText="Ny annonse" pageLink="/" imageLink='..\..\public\static\Icons\add.svg'/>
      <NavElement navText="Melding" pageLink="/" imageLink="..\..\public\static\Icons\comment.svg"/>
      <NavElement navText="Profil" pageLink="/profile" imageLink="..\..\public\static\Icons\user.svg"/>
    </ul>
    <NavElement v-else navText="Logg inn" pageLink="/login" imageLink="..\..\public\static\Icons\login.svg" />
  </nav>
  <br>
</template>

<script lang="ts">
import NavElement from "@/components/NavElement.vue";
import Logo from "@/components/Logo.vue";

import { useAuthStore } from "@/store/authStore";
import { mapState } from "pinia";

export default {
  name: "NavBar",
  components: {Logo, NavElement},
  computed: {
    ...mapState(useAuthStore, ["token"])
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
