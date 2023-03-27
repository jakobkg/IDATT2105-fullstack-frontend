<template>
  <RouterLink to="/">
    <img src="/static/Icons/loftet.png" alt="Website logo">
  </RouterLink>
</template>

<script lang="ts">


export default {
  name: "Logo"
}
</script>

<style scoped lang="scss">
img {
  $size: 4.4rem;
  height: $size;
  width: $size;
  padding-left:5px;
}

@media (max-width: base.$phone) {
  img {
    $size: 2.8rem;
    height: $size;
    width: $size;
  }
}
</style>