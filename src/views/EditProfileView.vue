<template>
    <h1>Rediger bruker</h1>
  <Form  @submit="onSubmit">
      <div class="wrapper">

      <label for="firstname">Fornavn</label><ErrorMessage name="firstname" /><br>
      <Field type="text" id="firstname" name="firstname" v-model="updatedUser.firstname" :rules="validateString"/><br>

      <label for="lastname">Etternavn</label><ErrorMessage name="lastname" /><br>
      <Field type="text" id="lastname" name="lastname" v-model="updatedUser.lastname" :rules="validateString" /><br>

      <label for="email">E-post</label><ErrorMessage name="email" /><br>
      <Field name="email" type="email" v-model="updatedUser.email" :rules="validateEmail" />

      <label for="password">Passord</label><ErrorMessage name="password" /><br>
      <Field type="password" name = "password" id="password" /><br>

      <label for="address">Adresse</label><ErrorMessage name="address" /><br>
      <Field type="text" name="address" id="address" v-model="updatedUser.address" :rules="validateAddress"/>

      <label for="postcode">Postnummer</label><ErrorMessage name="postcode" /><br>
      <Field type="number"  name= "postcode" id="postcode" min="0" v-model="updatedUser.postcode" :rules="validateNumber"/><br>

      <label for="city">By</label><ErrorMessage name="city" /><br>
      <Field type="text" name="city" id="city" v-model="updatedUser.city" :rules="validateString"/><br>

      <br><br>

      </div>
      <input type="submit" value="Lagre endringer">
    </Form>


</template>


<script>

import { mapState } from "pinia";
import { useAuthStore } from "@/store/authStore";
import { Form, Field, ErrorMessage } from "vee-validate";




export default {
  name: "EditProfileView",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
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
  setup(){

  },
  methods: {
    onSubmit(value) {
      alert("submitted ")
    },
    validateEmail(value) {
      if (!value) {
        return ' - 🔺Obligatorisk felt🔺';
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return ' - 🔺 Feltet må inneholde en gyldig epost 🔺';
      }
      return true;
    },
    validateString(value) {
      if (!value) {
        return ' - 🔺Obligatorisk felt🔺';
      }
      const regex = /^[a-z\s]{0,255}$/i;
      if(!regex.test(value)) {
        return ' - 🔺 Feltet inneholder ugyldige tegn 🔺';
      }
      return true;
    },
    validateNumber(value){
      if (!value) {
        return ' - 🔺Obligatorisk felt🔺';
      }
      const regex =/^\d{4}$/;
      if(!regex.test(value)) {
        return ' - 🔺 Feltet må inneholde et gyldig postnr 🔺';
      }
      return true;
    },
    validateAddress(value){
      if (!value) {
        return ' - 🔺Obligatorisk felt🔺';
      }
      const regex = /^([A-Za-z0-9'\.\-\s\,]{1,})$/;
      if(!regex.test(value)) {
        return ' - 🔺 Feltet må inneholde en gyldig adresse 🔺';
      }
      return true;
    },
      /*
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/user/{id}`, {
        values
      }).then(resp => {
        console.log(resp.data);
      }).catch(error => {
        console.log(error);
      });
      alert("Du har oppdatert din brukerinformasjon");
    },*/
    validateForm() {

    }
  },
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
input[type="submit"] {
  width:25%;
  padding:.5em;
}


</style>