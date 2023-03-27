<script lang="ts">
import router from '@/router';
import { API } from '@/util/API';

export default {
    data: () => {
        return {
            newUser: {} as CreateUserRequest,
            creationFailed: false,
        }
    },
    methods: {
        createUser() {
            API.Loftet.createUser(this.newUser)
                .then((createdUser: User) => {
                    API.Loftet.login({ email: createdUser.email, password: this.newUser.password })
                        .then(() => {
                            router.push("/profile");
                        })
                }
                )
                .catch(() => {
                    this.creationFailed = true;
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

            <p v-if="creationFailed">Kunne ikke opprette bruker</p>
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

.form-container {
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