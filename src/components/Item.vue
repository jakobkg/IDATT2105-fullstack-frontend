<template>
  <h1>REDIGER ANNONSE</h1>
  <form>
    <label for="title">Annonsetittel:</label><br>
    <input type="text" id="title" name="title"  required><br>

    <label for="description">Beskrivelse:</label><br>
    <input type="text" id="description" name="desctiption" required><br>

    <label for="email">Pris:</label><br>
    <input type="text" id="email" name="email">

    <label for="category">Kategori:</label><br>

    <select id="category" name="category">
      <option v-for="category in categories">
        {{ category.name }}
      </option>
    </select><br>

    <label for="address">Adresse:</label><br>
    <input type="text" id="address" name="address" required><br>

    <label for="images">Last opp bilder:</label><br>
    <input type="file" id="images" name="images" accept="image/jpeg, image/png, image/jpg"><br>
    <output></output>
    <input type="submit" value="Submit">
  </form>
</template>

<script>


export default {
  name: "Item",

  data() {
    return {
      categories: [{ name: 'Foo' }, { name: 'Bar' }]
    }
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

<style scoped>

</style>