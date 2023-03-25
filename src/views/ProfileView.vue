<script>
import { useAuthStore } from "@/store/authStore";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useAuthStore, ['user']),
  }
}
</script>

<template>
  <main>
    <h1>Din profil</h1>
    <div class="profile-page">
      <div class="profile">
<!--        <figure style="background-image: url('/src/profile-img.jpg');"><img src="@/profile-img.jpg"/></figure>-->
        <div class="details">
          <h2>{{user.firstname}} {{user.lastname}}</h2>
          <p>{{user.email}}</p>
          <p>{{user.streetAddress}}, {{user.postCode}} {{user.city}}</p>
        </div>
      </div>

      <div class="buttons">
        <button><a href="/profile/edit">Rediger profil</a></button>
        <button>Mine annonser</button>
        <button>Mine bokmerker</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  main {
    text-align: left;
    .profile-page {
      .profile {
        display: flex;
        align-items: center;

        figure {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-position: center;
          background-size: cover;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }

        .details {

        }
      }

      .buttons {
        margin: 40px 0;
        button {
          display: inline-block;
          margin: 0 auto;
        }
      }
    }
  }



</style>