<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useCategoryStore } from '@/store/categoryStore';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useCategoryStore, ["categories"]),
  },
  components: {
    HelloWorld
  }
}
</script>

<template>
  <main>
    <HelloWorld />
    <ul>
      <li v-for="category in categories"> {{ category.categoryName }}</li>
    </ul>
  </main>
</template>
