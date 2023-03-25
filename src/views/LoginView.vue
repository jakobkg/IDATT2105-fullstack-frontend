<script lang="ts">
import router from '@/router';
import { API } from '@/util/API';

export default {
    data() {
        return {
            email: "",
            password: "",
            errormsg: ""
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

            <div class="field-container">
                <label for="email">E-post</label>
                <input type="text" v-model="email">
            </div>

            <div class="field-container">
                <label for="passord">Passord</label>
                <input type="password" v-model="password">
            </div>

            <p>{{ errormsg }}</p>

            <button @click="() => { login() }">LOGG INN</button>

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