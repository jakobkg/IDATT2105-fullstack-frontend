<template>
    <h1>Rediger bruker</h1>
  <Form  @submit="onSubmit">
      <div class="wrapper">

      <label for="firstname">Fornavn</label><ErrorMessage name="firstname" /><br>
      <Field type="text" id="firstname" name="firstname" v-model="updatedUser.fname" :rules="validateString"/><br>

      <label for="lastname">Etternavn</label><ErrorMessage name="lastname" /><br>
      <Field type="text" id="lastname" name="lastname" v-model="updatedUser.lname" :rules="validateString" /><br>

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
import { API } from '@/util/API';
import router from '@/router';


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
      fname: this.user.firstname,
      lname: this.user.lastname,
      address: this.user.streetAddress,
      postcode: this.user.postCode,
      city: this.user.city,
      }
    },
  },
  methods: {
    onSubmit() {
      const id = this.user.id;
      API.Loftet.updateUser(id,{
        firstname:this.updatedUser.fname,
        lastname:this.updatedUser.lname,
        streetAddress:this.updatedUser.address,
        postCode:this.updatedUser.postcode,
        city: this.updatedUser.city})
      .then((savedUser)=>{
        useAuthStore().setUser(savedUser);
        router.push("/profile");
      })
      .catch((_)=> {
      });
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