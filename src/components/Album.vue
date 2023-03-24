<template>
  <div>
    <div v-if="noImages" id="emptyImage">
      <div id="img">
        <img src="public/static/icons/camera.svg" alt="Camera image">
        <h5>Ingen bilder er lagt inn</h5>
      </div>
    </div>
    <div v-else id="imageAlbum">
      <div id="img">
        <img src="public/static/icons/camera.svg" alt="Camera image">
        <h5>Masse bilder her</h5>
      </div>
    </div>
  </div>
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
      //return this.albumImages.length===0;
      return true;
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