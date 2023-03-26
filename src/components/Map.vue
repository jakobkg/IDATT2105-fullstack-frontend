<template>
  <div style="height:600px; width:100%">
    <l-map ref="map" v-model:zoom="zoom" :center="[64.11308242739351, 10.976041048172368]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="item in items" :lat-lng="[item.latitude, item.longitude]">
        <l-popup>
          <RouterLink :to="`/item/${item.id}`">{{item.title}}</RouterLink>
          <br>
          {{item.price}}kr
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  props: {
    items: Array,
  },
  data() {
    return {
      zoom:5,
    };
  },
};
</script>
<style></style>
