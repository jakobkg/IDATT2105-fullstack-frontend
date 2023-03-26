<script lang="ts">
import router from '@/router';
import { API } from '@/util/API';
import {Form, Field, ErrorMessage} from "vee-validate";



export default {
    data() {
        return {
            email: "",
            password: "",
            errormsg: "",
        }
    },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
    methods: {
        login() {
            API.Loftet.login({email: this.email, password: this.password} as LoginRequest)
                .then(() => {
                    router.push("/profile");
                })
                .catch(() => {
                    this.errormsg = "Kunne ikke logge inn! Sjekk brukernavn og passord, og prøv igjen";
                });
        }
    }
}
</script>

<template>



    <main>
        <div class="login-container">
            <h2>Logg inn</h2>
          <form @submit.prevent="login">
            <div class="field-container">
              <label for="email">E-post</label>
              <ErrorMessage name="email"></ErrorMessage>
              <Field name="email" type="text" v-model="email" ></Field>
            </div>
            <br>
            <div class="field-container">
              <label for="password">Passord</label>
              <ErrorMessage name="password"></ErrorMessage>
              <Field name="password" type="password" v-model="password"></Field>
            </div>
            <br>

            <br>

            <p>{{ errormsg }}</p>

            <button @click="() => { login() }">LOGG INN</button>
          </form>

            <p><RouterLink to="/newuser">Ny bruker</RouterLink> - <a href="#">Glemt passord?</a></p>
        </div>
    </main>
</template>

<style lang="scss">
$width: 15rem;

main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: .66rem;
    padding: 1rem;

    border: 1px solid white;
    border-radius: 1rem;
}

.field-container {
    display: flex;
    justify-content: space-between;

    width: $width;

    input {
        width: 60%;
    }
}
</style>