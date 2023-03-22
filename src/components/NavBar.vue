<template>
  <div id = navbarWrapper>
    <Logo />
    <div>
      <NavButton buttonText="Ny annonse" pageLink="/newListing" imageLink='public/favicon.ico'/>
      <NavButton buttonText="Melding" pageLink="/messsages" imageLink="public/favicon.ico"/>
      <NavButton buttonText="Profil" pageLink="/profile" imageLink="public/favicon.ico"/>
    </div>
  </div>

</template>

<script>
import NavButton from "@/components/NavButton.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "NavBar",
  components: {Logo, NavButton}
}
</script>

<style scoped>

#navbarWrapper {
  width: 100%;
  background-color: aqua;/*TODO*/
  display: flex;
  justify-content: space-between;
}
</style>