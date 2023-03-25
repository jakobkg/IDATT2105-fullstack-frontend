<template>
  <div style="height:600px; width:800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[64.11308242739351, 10.976041048172368]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="marker in markers" :lat-lng="marker">
        <l-popup>lol</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup>
// TODO get location data as well as some item data from api and put those in here
let markers = [
  [
    63.43168323054608, 10.396156216943767 //example
  ]
];
</script>
<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 5,
    };
  },
};
</script>
<style></style>
