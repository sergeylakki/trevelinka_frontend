<template>
    <div class="map-container">
      <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%;">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="(hike, index) in hikes" :key="index" :lat-lng="[hike.lat, hike.lng]">
          <l-popup>{{ hike.title }}</l-popup>
        </l-marker>
      </l-map>
    </div>
  </template>
  
  <script>
  import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
  
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
    },
    data() {
      return {
        zoom: 10,
        center: [48.8588443, 2.2943506], // Пример координат
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors',
        hikes: [
          { title: "Mountain Hike", lat: 48.8588443, lng: 2.2943506 },
          { title: "Forest Adventure", lat: 48.8566, lng: 2.3522 },
        ],
      };
    },
  };
  </script>
  
  <style>
  .map-container {
    margin: 20px 0;
    height: 500px; /* Фиксированная высота */
    width: 100%; /* Заполняет всю ширину */
    border: 2px solid #dcdcdc;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .l-map {
    height: 100%; /* Карта заполняет весь контейнер */
    width: 100%;
  }
  </style>
  