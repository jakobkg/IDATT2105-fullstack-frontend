<template>
    <div class="content">
        <div class="image">
            <img class="thumbnail" :src="image" alt="image">
        </div>
        
        <div class="info">
            <h3 class="label">{{ label }}</h3>
            <h3> {{ price }}</h3>
            <h4>{{ location }} - {{ date }}</h4>
        </div>
        <div v-if="this.authStore.isLoggedIn() && this.user.id === userId">
          <a href="" class="edit-link"><img src="..\..\public\static\Icons\pencil.svg" alt="edit"></a>
        </div>

      <div v-if="this.authStore.isLoggedIn() && this.user.id === userId">
        <a href="" class="delete-link"><img src="..\..\public\static\Icons\trash.svg" alt="delete"></a>
      </div>

        <div class="bookmark">
            <img v-if="!isBookmarked" class="bookmark-img" src="..\..\public\static\Icons\bookmark.svg" alt="bookmark">
            <img v-else class="bookmark-img" src="..\..\public\static\Icons\bookmark-dark.svg" alt="bookmark">
        </div>
    </div>
</template>
<script lang="ts">
import { mapState, mapStores } from "pinia";
import { useAuthStore } from "@/store/authStore";

export default {
        name: "ItemCard",
        computed: {
          ...mapStores(useAuthStore),
          ...mapState(useAuthStore, ['user'])
        },
        props: {
            userId: {
              type: Number,
              required: false,
            },
            image: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },
            itemId: {
                type: Number,
                required: true
            },
            isBookmarked: {
                type: Boolean,
                required: false,
                default: false
            }
        }


    }
</script>

<style scoped lang="scss">
    .edit-link {
      width: 25px;
      height: 25px;
      display: inline-block;
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
        padding: 5px;
      }
    }


    .delete-link {
      width: 25px;
      height: 25px;
      display: inline-block;
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
        padding: 5px;
      }
    }
    .content {
        position: relative;
        border-bottom: solid 1px #999;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        min-height: 130px;
        min-width: 270px;
        /* max-height: 180px; */
        max-width: 100%;
        border-radius: 5px;
        padding-bottom:15px;
        overflow: hidden;
        text-align: left;
        // padding-right: 35px;
        margin-right: 35px;
      &:hover {
        background-color: #e4e2de;
      }
    }

    .image {
        /* width: 120px; */
        min-width: 150px;
        width: 150px;
        height: 150px;
        height: 100%;
        margin-top: 15px;
    }

    .thumbnail {
        max-height: 150px;
        min-height: 150px;
        min-width: 150px;
        max-width: 150px;

        height: 100%;
        width: 100%;
        
        border-radius: 5px;

        object-fit: cover;
    }

    .info {
       margin-left: 15px;
    }

    .label {
        margin-top: 15px;
        padding-bottom: 36px;
        margin-bottom: 0;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 0;
    }


    .bookmark-img {
        position: absolute;
        top: 0px;
        right: 0px;

        max-height: 100%;
        max-width: 100%;
        width: 25px;
        
        padding: 5px
        
    }

    @media (max-width: base.$phone) {
        .image {
            /* width: 120px; */
            min-width: 30%;
            width: 30%;
     
            margin-top: 15px;
        }
        .thumbnail {
            min-width: 100%;
            min-height: 100%;

        }
}

</style>