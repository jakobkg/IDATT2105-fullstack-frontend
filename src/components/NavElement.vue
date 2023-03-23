<template>
  <li>
    <a :href=pageLink>
      <div>
        <img :src=imageLink alt="">
        <p>{{navText}}</p>
      </div>
    </a>
  </li>
</template>

<script setup>
defineProps({
  navText: {
    type: String,
    required: true
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
<script>
export default {
  name: "NavElement",
}
</script>

<style scoped>
li{
  float: left;
  margin-left: 0;
  display: inline-block;
  padding: .5rem;
}

a {
  text-decoration: none;
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
  object-fit: contain;
}

li p {
  display: inline-block;
}

li:hover {
  background-color: deeppink;
}
</style>