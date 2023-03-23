<script lang="ts">
import { login } from '@/util/login';
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login
    }
}
</script>

<template>
    <div class="login-container">
        <input type="text" v-model="email">
        <input type="password" v-model="password">
        <button @click="() => {login(email, password)}">LOGG INN</button>
    </div>
</template>

<style></style>