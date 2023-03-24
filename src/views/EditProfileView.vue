<template>

    <h1>Rediger bruker</h1>
    <form action="">
      <div class="wrapper">
      <label for="firstname">Fornavn:</label><br>
      <input type="text" id="firstname" ><br>

      <label for="lastname">Etternavn</label><br>
      <input type="text" id="lastname" ><br>

      <label for="email">E-post</label><br>
      <input type="email" id="email" ><br>

      <label for="password">Passord</label><br>
      <input type="password" id="password"><br>

      <label for="address">Adresse</label><br>
      <input type="text" id="address" ><br>

      <label for="postcode">Postnummer</label><br>
      <input type="number" id="postcode" ><br>

      <label for="citys">By</label><br>
      <input type="text" id="city" ><br>

      <br><br>
      </div>
      <input type="submit" value="Lagre endringer">
    </form>

</template>

<script>
export default {
  name: "EditProfileView"
};
</script>

<style scoped lang="scss">

.wrapper {
  text-align: left;
}
form{
  align-content: end;
}
input[type="text"],input[type="select"],input[type="number"],
input[type="email"],input[type="password"]{
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