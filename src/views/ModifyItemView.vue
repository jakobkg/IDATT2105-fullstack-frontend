<script lang="ts">
import Album from "@/components/Album.vue";
import { API } from '@/util/API';
import router from "@/router";
import { mapState } from "pinia";
import { useCategoryStore } from "@/store/categoryStore";
import { useAuthStore } from "@/store/authStore";

export default {
  name: "ModifyItemView",
  components: { Album },

  data() {
    return {
      itemId: this.$route.params.id,
      item: {} as Item,

      itemImages: [] as string[],
      imageList: '',
      
      category: {} as Category,
      categoryName: "",
    };
  },
  computed: {
    ...mapState(useCategoryStore, ["categories"]),
    ...mapState(useAuthStore, ['user']),
  },
  mounted() {
    API.Loftet.getItem(Number(this.$route.params.id))
      .then((item: Item) => {
        this.item = item;

        this.imageList = item.images;
        this.category = this.categories.filter((category) => { return category.id == item.categoryId;})[0];
        this.categoryName = this.category.categoryName;
        this.updateImages();
      });
  },
  methods: {
    updateImages() {
      this.itemImages = this.imageList.split(",").map((itemText: string) => itemText.trim());
    },
    submit() {
      const imageList = this.imageList;

      let long: string;
      let lat: string;

      const itemId = this.item.id;

      API.Location.cityToCoords(this.item.location)
        .then((coordinates) => {
          long = coordinates.longitude;
          lat = coordinates.latitude;
        })
        .then(() => {
          return API.Loftet.updateItem(itemId, {
            title: this.item.title,
            description: this.item.description,
            price: this.item.price,
            latitude: long,
            longitude: lat,
            location: this.item.location,
            categoryId: this.categories.filter((category) => {return category.categoryName === this.categoryName})[0].id,
            images: imageList,
          })
        }).then(() => {
          router.push("/item/" + itemId);
        })
        .catch(() => {
          alert("Det oppsto en feil ved oppdatering av annonsen! Sjekk at adressen er korrekt angitt")
        });
    },
  }
}
</script>

<template>
  <main>
    <h1>REDIGER ANNONSE</h1>

    <Album :album-images=itemImages />

    <form @submit.prevent="submit">
      <label for="title">Annonsetittel:</label><br>
      <input type="text" v-model="item.title" id="title" name="title" required><br>

      <label for="description">Beskrivelse:</label><br>
      <textarea id="description" v-model="item.description" name="desctiption" required></textarea>

      <label for="price">Pris:</label><br>
      <input type="number" id="price" v-model="item.price" name="price" min="0" required><br>

      <label for="category">Kategori:</label><br>
      <select id="category" v-model="categoryName" name="category">
        <option v-for="category in categories">
          {{ category.categoryName }}
        </option>
      </select><br>

      <label for="address">Adresse:</label><br>
      <input type="text" id="address" v-model="item.location" name="address" required><br>

      <label for="images">Legg inn komma-separerte bildelenker:</label><br>
      <input v-model="imageList" type="text" id="images" name="images" @keyup="updateImages()">

      <input type="submit" value="Lagre">
    </form>

  </main>
</template>


<style scoped lang="scss">
main {
  text-align: left;
  width: 90%;
}

form {
  align-content: end;
}

input[type="text"],
input[type="select"],
input[type="number"] {
  width: 100%;
  padding: .5em;
  outline-color: base.$pink;
}

textarea {
  min-width: 100%;
  resize: vertical;
  padding: .5em;
}

input:focus-visible,
textarea:focus-visible {
  outline: 2px solid base.$pink;
  border-radius: 3px;
}
</style>