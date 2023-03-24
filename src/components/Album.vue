<template>
  <div>

    <div v-if="noImages" id="emptyImage">
      <div id="img">
        <img src="public/static/icons/camera.svg" alt="Camera image">
        <h5>Ingen bilder er lagt inn</h5>
      </div>
    </div>
    <div v-else id="imageAlbum">
      <div id="img" v-for="imageLink in albumImages" >
          <img :src="imageLink" alt="">
      </div>
    </div>
  </div>
  <h5>Lastet opp {{numOfImages}} bilder</h5>
</template>

<script>
export default {
  name: "Album",
  props: {
    albumImages: Array,
    required: false,
  },
  computed: {
    noImages(){
      return this.albumImages.length===0;
    },
    numOfImages(){
      return this.albumImages.length;
    }
  }
};

</script>
<style scoped>
div div{
  width: 100%;
  display: flex;
  justify-content: center;
}

#img{
  width: 15%;
  display: flex;
  justify-content: center;
  flex-direction: column;

}

img {
  max-width: 100%;
}
</style>