<template>
  <nav>
    <Logo/>
    <ul>
      <NavElement navText="Ny annonse" pageLink="/" imageLink='public/favicon.ico'/>
      <NavElement navText="Melding" pageLink="/" imageLink="public/favicon.ico"/>
      <NavElement navText="Profil" pageLink="/" imageLink="public/favicon.ico"/>
    </ul>
  </nav>

</template>

<script>
import NavElement from "@/components/NavElement.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "NavBar",
  components: {Logo, NavElement: NavElement}
}
</script>

<style scoped>

nav {
  width: 100%;
  background-color: aqua;/*TODO*/
  display: flex;
  justify-content: space-between;
}

ul{
  list-style-type: none;
  margin: 0;
  padding: 0;

}
</style>