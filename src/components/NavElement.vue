<template>
  <li>
    <a :href=pageLink>
      <div>
        <img :src=imageLink alt="">
        <p class = "navtext">{{navText}}</p>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps({
  navText: {
    type: String,
    required: false
  },
  imageLink: {
    type: String,
    required: true
  },
  pageLink: {
    type: String,
    required: false
  }
})
</script>
<script lang="ts">
export default {
  name: "NavElement",
}
</script>

<style scoped lang="scss">
li{
  margin-left: 0;
  display: inline-block;
  padding: .5rem;
  border-bottom: 2px solid base.$offWhite;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: black;
}


div{
  display: flex;
  align-content: center;
}

li img {
  float: left;
}

img {
  max-height: 100%;
  max-width: 100%;
  width: 25px;
  padding: 2px;
  object-fit: contain;
}

@media (max-width: base.$phone) {
  .navtext{
    display: none;
  }
}

li p {
  display: inline-block;
}

li:hover {
  border-bottom: 2px solid base.$pink;
}
</style>