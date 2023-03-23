<template>
    <div class="content">
        <div class="image">
            <img :src="image" alt="image">
        </div>
        
        <div class="info">
            <h3 class="label">{{ label }}</h3>
            <h3> {{ price }}</h3>
            <h4>{{ location }} - {{ date }}</h4>
        </div>

   

    </div>


</template>





<script lang="ts">
    export default {
        name: "ItemCard",
        props: {
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
                type: String,
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

    .content {


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
    }

    .content:hover {
        background-color: #e4e2de;
        
    }

    .image {
        /* width: 120px; */
        min-width: 150px;
        width: 150px;
        height: 150px;
        height: 100%;
        margin-top: 15px;
    }


    img {
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

    @media (max-width: base.$phone) {
        .image {
            /* width: 120px; */
            min-width: 30%;
            width: 30%;
     
            margin-top: 15px;
        }
        img {
            min-width: 100%;
            min-height: 100%;

        }
}

</style>