<script lang="ts">
import router from '@/router';
import { API } from '@/util/API';

export default {
    data() {
        return {
            email: "",
            password: "",
            errormsg: "",
        }
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
              <input id="email-input" name="email" type="text" v-model="email" />
            </div>
            <br>
            <div class="field-container">
              <label for="password">Passord</label>
              <input id="password-input" name="password" type="password" v-model="password" />
            </div>
            <br>
            <br>

            <p id="error-message">{{ errormsg }}</p>

            <button id="login-button" @click="() => { login() }">LOGG INN</button>
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