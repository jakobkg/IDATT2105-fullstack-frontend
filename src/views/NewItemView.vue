
<script lang="ts">
import Album from "@/components/Album.vue";
import { API } from '@/util/API';
import router from "@/router";
import { mapState } from "pinia";
import { useCategoryStore } from "@/store/categoryStore";
import { useAuthStore } from "@/store/authStore";

export default {
  name: "NewItemView",
  components: { Album },

  data() {
    return {
      fileList: {} as FileList | null,
      itemImages: [] as string[],
      itemText: '',
      itemTitle: "",
      description: "",
      price: "",
      category: "",
      address: "",
      errormsg: ""
    };
  },
  computed: {
    ...mapState(useCategoryStore, ["categories"]),
    ...mapState(useAuthStore, ['user']),
  },
  methods: {
    filesSelected(files: FileList | null) {
      this.fileList = files;
    },
    submit() {
      let imageList = "";

      //fetches category from select
      const selectedCategoryId = this.category.split(":")[0];

      let long: string;
      let lat: string;

      //finds coordinates from address
      const userID = this.user.id;

      API.Location.cityToCoords(this.address)
        .then((coordinates) => {
          long = coordinates.longitude;
          lat = coordinates.latitude;
        })
        .then(async () => {
          if (this.fileList) {
            for (const file of this.fileList) {
              await API.Loftet.uploadFile(file)
                .then((url) => {
                  imageList = `${url},${imageList}`;
                })
            }
          }

          return;
        })
        .then(() => {
          console.log(imageList);
          API.Loftet.createItem({
            title: this.itemTitle,
            description: this.description,
            price: this.price,
            latitude: lat,
            longitude: long,
            location: this.address,
            categoryId: Number.parseInt(selectedCategoryId),
            images: imageList,
            userId: userID,
          })
            .then(() => {
              router.push("/");
            })
        })
        .catch(() => {
          this.errormsg = "Det oppsto en feil ved opprettelse av annonsen. Er adressen angitt korrekt?"
        });
    },
  }
}
</script>

<template>
  <main>
    <h1>OPPRETT ANNONSE</h1>

    <Album :album-images=itemImages />

    <form @submit.prevent="submit">
      <label for="title">Annonsetittel:</label><br>
      <input type="text" v-model="itemTitle" id="title" name="title" required><br>

      <label for="description">Beskrivelse:</label><br>
      <textarea id="description" v-model="description" name="desctiption" required></textarea>

      <label for="price">Pris:</label><br>
      <input type="number" id="price" v-model="price" name="price" min="0" required><br>

      <label for="category">Kategori:</label><br>
      <select id="category" v-model="category" name="category">
        <option v-for="category in categories">
          {{ category.id + ":" + category.categoryName }}
        </option>
      </select><br>

      <label for="address">Adresse:</label><br>
      <input type="text" id="address" v-model="address" name="address" required
        placeholder="Adresse gatenr postnr by"><br>

      <label for="images">Legg inn komma-separerte bildelenker:</label><br>
      <input @change="(event) => { if (event.target) filesSelected((event.target as HTMLInputElement).files) }"
        type="file" multiple accept=".jpeg, .jpg" id="images" name="images"><br><br>
      <br><br>

      <input type="submit" value="Opprett">
      <p> {{ errormsg }} </p>
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
  width: 100%;
  resize: vertical;
  padding: .5em;
}

input:focus-visible,
textarea:focus-visible {
  outline: 2px solid base.$pink;
  border-radius: 3px;
}
</style>