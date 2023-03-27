<template>
    <div class="content">
            <div class="images">
                <img :src=image alt="image">
            <div class="under-image">
                <button class="previous-btn" @click="previousImage">{{ previous }}</button>
                <p class="imageCount">({{ imageIndex }}/{{ totalImages }})</p>
                <button class="next-btn" @click=nextImage>{{ next }}</button>
            </div>
            </div>

        <div class="info">
            <div class="left">
                <p class="date-text"> {{ item.date }} </p>
                <h2 class="title"> {{ item.title }}</h2>
                <h2 class="price"> {{ item.price }}kr</h2>
                <h3 class="location">{{ item.location }}</h3>
            </div>
            <div class="right">
                <button v-if=!isBookmarked class="bookmark" @click=addToBookmarks><img src="\static\Icons\bookmark.svg" class="bookmark-image">Bokmerke</button>
                <button v-else class="is-bookmarked" @click=deleteFromBookmarks><img src="\static\Icons\bookmark-dark.svg" class="bookmark-image">Bokmerke</button>
                <button class="contact" @click=mailSeller>Kontakt selger</button>
            </div>
        </div>

        <div class="description">
            <h3 class="description-header">
                Beskrivelse
            </h3>
            <p class="description-text">{{ item.description }}</p>
        </div>
        
    </div>
</template>

<script lang="ts">
  import { API } from '@/util/API';

    export default {
        name: "ItemView",
        data() {
            return {
                id: this.$route.params.id,
                item: {} as Item,
                image: "" as string | undefined,
                seller: {} as User,
                images: [] as string[],
                imageIndex: 1,
                totalImages: -1,
                previous: "Forrige",
                next: "Neste",
                isBookmarked: false,

            }
        },
        
        methods: {
            async loadData() {
                const response = await API.Loftet.getItem(Number(this.$route.params.id));
                this.item = response;
                this.image = this.item.images.split(",").shift();
                this.images = this.item.images.split(",");
                this.totalImages = this.images.length;

                console.log(this.item);

                const userResponse = await API.Loftet.getUser(this.item.userId);
                this.seller = userResponse;

                this.isItemBookmarked();


            
            },

            nextImage() {
                if (this.imageIndex == this.images.length) {
                    this.image = this.images[0];
                    this.imageIndex = 1;
                } else {
                    this.image = this.images[this.imageIndex];
                    this.imageIndex += 1;
                }

            },

            previousImage() {
                if (this.imageIndex == 1) {
                    this.image = this.images[this.images.length - 1];
                    this.imageIndex = this.images.length;
                } else {
                    this.image = this.images[this.imageIndex - 2];
                    this.imageIndex -= 1;
                }
            },

            mailSeller() {
                console.log("mailto:" + this.seller.email);
                return location.href="mailto:" + this.seller.email;
            },

            async addToBookmarks() {
                const bookmarkResponse = await API.Loftet.addToBookmarks((Number(this.id)));
                console.log(bookmarkResponse);
                this.isBookmarked = true;
            },

            async deleteFromBookmarks() {
                const bookmarkResponse = await API.Loftet.deleteBookmark((Number(this.id)));
                console.log(bookmarkResponse);
                this.isBookmarked = false;
            },

            async isItemBookmarked() {
                this.isBookmarked = await API.Loftet.isBookmarked(Number(this.id));
            }

        },

        mounted() {
            this.loadData();

        }
    }
</script>

<style scoped lang="scss">

    .images {
        height: 500px;
        width: auto;
        min-height: 300px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        position: relative;
        padding: 0 50px;

        
    }
    img {
     
        max-width: 100%;
        max-height: 400px;

    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info {
        display: flex;
        flex-direction: row;
        // gap: 150px;
        width: 100%;
        max-width: 750px;
    }

    .right {
        display: flex;
        flex-direction: column;
        text-align: right;
        gap: 40px;
        // padding-right: 150px;
    }
    .left {
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 80%;
        padding-right: 20px;
        // padding-left: 150px;
    }

    .date-text {
        margin: 0;
    }

    .title, .price {
        margin-top: 0;
    }
    
    .description-header {
        text-align: left;
    }

    .description-text {
        text-align: left;
    }

    button {
        height: min-content;
        align-self: center;
    }
    .bookmark {
        width: 155px;
    }

    .bookmark-image {
        
        
        width: 20px;
        float: left;
        margin-right: 5px;
        margin-top: -2px;
 
    }

    .is-bookmarked {
        width: 155px;
        border: 1px solid base.$indigo;
        
        
    }

    .contact {
        width: 155px;
    }

    .description {
        width: 100%;
        max-width: 750px;
    }

    .under-image {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 300px;
        justify-self: center;

    }
    

    @media only screen and (max-width: base.$phone) {
        .left {
            padding-left: 10px;
        }
        .right {
            padding-right: 10px;
        }
        .images {
            padding: 0;
        }
    }
    

</style>