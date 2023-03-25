<template>
    <h1>Rediger bruker</h1>
    <form  @submit.prevent="onSubmit">
      <div class="wrapper">
      <label for="firstname">Fornavn:</label><br>
      <input type="text" id="firstname" v-model="updatedUser.firstname"><br>

      <label for="lastname">Etternavn</label><br>
      <input type="text" id="lastname" v-model="updatedUser.lastname"><br>

      <label for="email">E-post</label><br>
      <input type="email" id="email" v-model="updatedUser.email"><br>

      <label for="password">Passord</label><br>
      <input type="password" id="password"><br>

      <label for="address">Adresse</label><br>
      <input type="text" id="address" v-model="updatedUser.address"><br>

      <label for="postcode">Postnummer</label><br>
      <input type="number" id="postcode" v-model="updatedUser.postcode"><br>

      <label for="citys">By</label><br>
      <input type="text" id="city" v-model="updatedUser.city"><br>
      <br><br>
     <input type="submit" value="Lagre endringer">
      </div>
    </form>

</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/store/authStore";

export default {
  name: "EditProfileView",
  computed: {
    ...mapState(useAuthStore, ['user']),
  updatedUser() {
    return {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      address: this.user.streetAddress,
      postcode: this.user.postCode,
      city: this.user.city,
    }
  },
  },
  methods: {
    onSubmit() {
      //TODO: handle form
    }
  },
  data () {
    //TODO: FORM VALIDERING
}
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