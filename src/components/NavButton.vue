<template>
  <a :href= pageLink>
    <button>
      <div>
        <img :src=imageLink alt="">
        {{buttonText}}
      </div>
    </button>
  </a>

</template>
<script setup>
defineProps({
  buttonText: {
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
  name: "NavButton",
}
</script>

<style scoped>
button {
  border-radius: 0;
  display: inline-block;
  vertical-align: middle;
}
button:hover {

}
</style>