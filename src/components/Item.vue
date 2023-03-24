<template>
  <div id = wrapper>
    <h1>REDIGER ANNONSE</h1>

    <Album :album-images= itemImages />

    <form>
      <label for="title">Annonsetittel:</label><br>
      <input type="text" id="title" name="title"  required><br>

      <label for="description">Beskrivelse:</label><br>
      <textarea id="description" name="desctiption"></textarea>

      <label for="price">Pris:</label><br>
      <input type="number" id="price" name="price"><br>

      <label for="category">Kategori:</label><br>
      <select id="category" name="category">
        <option v-for="category in categories">
          {{ category.name }}
        </option>
      </select><br>

      <label for="address">Adresse:</label><br>
      <input type="text" id="address" name="address" required><br>

      <label for="images">Legg inn komma-separerte bildelenker:</label><br>
      <input v-model="itemText" type="text" id="images" name="images"><br><br>
      <button type="button" id="update" @click="loadImages">Oppdater bilder</button>
      <br><br>

      <input type="submit" value="Lagre">
    </form>

  </div>

</template>

<script lang="ts">
import Album from "@/components/Album.vue";

export default {
  name: "Item",
  components: { Album },

  data() {
    return {
      categories: [{ name: 'Foo' }, { name: 'Bar' }],
      itemImages: [] as any[],
      itemText:'',
    };
  },
  methods: {
    loadImages(){
      this.itemImages = this.itemText.split(",").map((itemText: string) => itemText.trim());
      console.log("la inn bilder: ");
      this.itemImages.forEach((item: any) => console.log(item))
    },
    submit(){

    },
  }
}

/**
 request.title(),
 request.description(),
 request.date(),
 request.latitude(),
 request.longitude(),
 request.price(),
 request.categoryId(),
 request.images(),
 user.getId());
 **/
</script>

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