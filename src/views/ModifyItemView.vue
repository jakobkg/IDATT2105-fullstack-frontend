
<script lang="ts">
import Album from "@/components/Album.vue";
import { API } from '@/util/API';
import router from "@/router";
import { mapState } from "pinia";
import { useCategoryStore } from "@/store/categoryStore";

export default {
  name: "ModifyItemView",
  components: { Album },

  data() {
    return {
      itemImages: [] as any[],
      itemText:'',
    };
  },
  computed: {
    ...mapState(useCategoryStore,["categories"]),
      itemTitle: "",
      description: "",
      price: "",
      category: "",
      address: "",
  },
  methods: {
    loadImages(){
      this.itemImages = this.itemText.split(",").map((itemText: string) => itemText.trim());
      console.log("la inn bilder: ");
      this.itemImages.forEach((item: any) => console.log(item))
    },
    submit(){
        const img = this.itemText;
        const categoryId = category.categoryId;

        API.Loftet.createItem({title:this.itemTitle, description: this.description,price:this.price,latitude:"56", longitude:"99", categoryId:"1",images:img})
          .then((item:Item) => {
            router.push("/item/"+item.id);
          })
          .catch(() => {
            //TODO
            console.log("feil ved opprettelse av annonse");
            alert("Det oppsto en feil")
            //this.errormsg = "Kunne ikke logge inn! Sjekk brukernavn og passord, og prøv igjen";
          });

    },
  }
}

</script>

<template>
  <div id = "wrapper">
    <h1>REDIGER ANNONSE</h1>

    <Album :album-images= itemImages />

    <form @submit.prevent="submit">
      <label for="title">Annonsetittel:</label><br>
      <input type="text" v-model="itemTitle" id="title" name="title"  required><br>

      <label for="description">Beskrivelse:</label><br>
      <textarea id="description" v-bind= "description" name="desctiption" required></textarea>

      <label for="price">Pris:</label><br>
      <input type="number" id="price" v-bind="price" name="price" min="0" required><br>

      <label for="category">Kategori:</label><br>
      <select id="category" v-bind="category" name="category">
        <option v-for="category in categories">
          {{ category.categoryName }}
        </option>
      </select><br>

      <label for="address">Adresse:</label><br>
      <input type="text" id="address" v-bind="address" name="address" required><br>

      <label for="images">Legg inn komma-separerte bildelenker:</label><br>
      <input v-model="itemText" type="text" id="images" name="images"><br><br>
      <button type="button" id="update" @click="loadImages">Oppdater bilder</button>
      <br><br>

      <input type="submit" value="Lagre">
    </form>

  </div>

</template>


<style scoped lang="scss">
#wrapper {
  text-align: left;
}

form{
  align-content: end;
}

input[type="text"],input[type="select"],input[type="number"] {
  width:100%;
  padding: .5em;
  outline-color: base.$pink;
}

textarea{
  min-width: 100%;
  resize: vertical;
  padding: .5em;
}

input:focus-visible, textarea:focus-visible {
  outline: 2px solid base.$pink;
  border-radius: 3px;
}
</style>