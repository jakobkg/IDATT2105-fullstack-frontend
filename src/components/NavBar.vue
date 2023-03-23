<template>
  <nav>
    <Logo/>
    <ul>
      <NavElement navText="Ny annonse" pageLink="/" imageLink='..\..\public\static\Icons\add.svg'/>
      <NavElement navText="Melding" pageLink="/" imageLink="..\..\public\static\Icons\comment.svg"/>
      <NavElement navText="Profil" pageLink="/" imageLink="..\..\public\static\Icons\user.svg"/>
    </ul>

  </nav>
  <br>
</template>

<script>
import NavElement from "@/components/NavElement.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "NavBar",
  components: {Logo, NavElement: NavElement}
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