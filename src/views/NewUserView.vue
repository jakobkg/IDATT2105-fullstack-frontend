<script lang="ts">
import { API } from '@/util/API';

export default {
    data: () => {
        return {
            newUser: {} as CreateUserRequest
        }
    },
    methods: {
        createUser() {
            API.createUser(this.newUser)
            .then(() => {
                console.log("Bruker opprettet")
            }
            )
            .catch(() => {
                console.log("OOF")
            })
        }
    }
}
</script>

<template>
    <main>
        <div class="form-container">
            <label for="firstname">Fornavn</label>
            <input type="text" v-model="newUser.firstname">

            <label for="firstname">Etternavn</label>
            <input type="text" v-model="newUser.lastname">

            <label for="firstname">E-post</label>
            <input type="email" v-model="newUser.email">

            <label for="firstname">Passord</label>
            <input type="password" v-model="newUser.password">

            <label for="firstname">Adresse</label>
            <input type="text" v-model="newUser.streetAddress">

            <label for="firstname">Postnummer</label>
            <input type="number" v-model="newUser.postCode">

            <label for="firstname">By</label>
            <input type="text" v-model="newUser.city">

            <button @click="createUser()">Opprett bruker</button>
        </div>
    </main>
</template>