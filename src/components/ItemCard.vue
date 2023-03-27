<template>
  <div class="content">
    <div @click="goToItem(item.id)" class="clickable">

      <div class="image">
        <img class="thumbnail"
          :src="thumbnail ? (thumbnail.length > 0 ? thumbnail : '/static/Icons/placeholder.png') : '/static/Icons/placeholder.png'"
          alt="image">
      </div>

      <div class="info">
        <h3 class="label">{{ item.title }}</h3>
        <h3> {{ item.price }} kroner</h3>
        <h4>{{ item.location }} - {{ item.date }}</h4>
      </div>

    </div>
    <div class="delete-btn" v-if="authStore.isLoggedIn && (user.id === item.userId || user.type === 'ADMIN')">
      <img @click="deleteItem" src="/static/Icons/trash.svg" alt="delete">
    </div>


    <div v-if="authStore.isLoggedIn && (user.id === item.userId || user.type == 'ADMIN')">
      <a :href="`/item/edit/${item.id}`" class="edit-link"><img src="\static\Icons\pencil.svg" alt="edit"></a>
    </div>
    <div class="bookmark">
      <img v-if="isBookmarked" @click="deleteFromBookmarks" class="bookmark-img" src="\static\Icons\bookmark-dark.svg"
        alt="bookmark">
      <img v-else @click="addToBookmarks" class="bookmark-img" src="\static\Icons\bookmark.svg" alt="bookmark">
    </div>
  </div>
</template>
<script lang="ts">
import { mapState, mapStores } from "pinia";
import { useAuthStore } from "@/store/authStore";
import { API } from '@/util/API'
import type { PropType } from "vue";
import router from "@/router";

export default {
  name: "ItemCard",
  mounted() {
    API.Loftet.isBookmarked(this.item.id).then((response) => { this.isBookmarked = response });
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ['user']),

  },
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true
    }
  },

  data() {
    return {
      thumbnail: this.item.images.split(",").shift(),
      location: "",
      isBookmarked: false,
    }
  },
  methods: {
    async isItemBookmarked(itemId: number): Promise<boolean> {
      const response = await API.Loftet.isBookmarked(Number(itemId));
      return response;
    },
    addToBookmarks() {
      API.Loftet.addToBookmarks((Number(this.item.id)))
      .then(() => {
        this.isBookmarked = true;
      })
    },

    deleteFromBookmarks() {
      API.Loftet.deleteBookmark((Number(this.item.id)))
      .then(() => {
        this.isBookmarked = false;
      })
    },

    deleteItem() {
      API.Loftet.deleteItem(this.item.id)
        .then(() => {
          router.go(0); // refresh page to show user the listing was deleted, as listing exists in parent state
        })
    },

    goToItem(id: number) {
      API.Loftet.goToItem(id);
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

  position: absolute;
  top: 0px;
  right: 35px;
  max-height: 100%;
  max-width: 100%;
  padding: 5px;

  img {
    width: 25px;
    height: 25px;
    padding: 5px;

    position: absolute;
    top: 0px;
    right: 0px;
    max-height: 100%;
    max-width: 100%;
  }
}


.delete-btn {
  width: 25px;
  height: 25px;
  display: inline-block;
  cursor: pointer;

  position: absolute;
  top: 0px;
  right: 70px;
  max-height: 100%;
  max-width: 100%;
  padding: 5px;

  img {
    max-width: 25px;
    max-height: 25px;
    padding: 5px;

    position: absolute;
    top: 0px;
    right: 0px;
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
  padding-bottom: 15px;
  overflow: hidden;
  text-align: left;
  // padding-right: 35px;
  margin-right: 35px;

  &:hover {
    background-color: #e4e2de;
  }
}

.clickable {
  position: relative;

  display: flex;
  flex-direction: row;
  flex-grow: 1;
  min-height: 130px;
  min-width: 270px;
  /* max-height: 180px; */
  max-width: 100%;
  border-radius: 5px;
  padding-bottom: 15px;
  overflow: hidden;
  text-align: left;
  margin-right: 35px;

}

.image {
  /* width: 120px; */
  min-width: 150px;
  width: 150px;
  height: 150px;
  height: 100%;
  margin-left: 15px;
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

  padding: 5px;

  cursor: pointer;




}

.edit-link {
  position: absolute;
  top: 0px;
  right: 35px;
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
}</style>