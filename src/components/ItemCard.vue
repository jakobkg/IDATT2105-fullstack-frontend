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





<script>
    export default {
        name: "ItemCard",
        props: {
            image: {
                type: String,
                  default: 'https://media.houseandgarden.co.uk/photos/618944690a583de660124d52/master/w_1600%2Cc_limit/1-house-29mar17-Nick-Pope_b.jpg'
/*                default: 'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'*/
            },
            label: {
                type: String,
                default: 'Hei jeg selger noe kult og dette er en litt lang tekst blablabla'
            },
            price: {
                type: String,
                default: "100kr"
            },
            location: {
                type: String,
                default: "Trondheim"
            },
            date: {
                type: String,
                default: "22.03.2022"
            }
        }


    }
</script>

<style scoped>

    .content {


        border-bottom: solid 1px #999;


        display: flex;
        flex-direction: row;
        flex-grow: 1;
        min-height: 130px;
        min-width: 270px;
        max-height: 180px;
        max-width: 100%;
        border-radius: 5px;

        padding-bottom:15px;
        
        overflow: hidden;

        text-align: left;
    }

    .image {
        width: 120px;
        /*min-width: 120px;*/
        height: 120px;
        margin-top: 15px;
    }


    img {
        max-width: 120px;
        max-height: 120px;

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


</style>