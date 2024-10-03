<template>
  <section class="hike-details">
    <div class="hike-banner">
      <img :src="hike.image" alt="Hike Image" class="hike-banner-image" />
      <div class="hike-title">
        <h1>{{ hike.title }}</h1>
        <p class="hike-description">{{ hike.description }}</p>
      </div>
    </div>
    
    <div class="hike-info">
      <div class="hike-details-section">
        <h2>Details</h2>
        <ul>
          <li><strong>Location:</strong> {{ hike.location }}</li>
          <li><strong>Difficulty:</strong> {{ hike.difficulty }}</li>
          <li><strong>Duration:</strong> {{ hike.duration }}</li>
        </ul>
      </div>

      <div class="hike-map">
        <h2>Map</h2>
        <HikeMap />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import HikeMap from '../components/HikeMap.vue';
export default {
  data() {
    return {
      hike: {},
    };
  },
  components: {
    HikeMap,
  },
  async created() {
    const hikeId = this.$route.params.id; // Получаем id похода из URL
    try {
      const response = await axios.get(`http://localhost:8000/hikes/${hikeId}`);
      this.hike = response.data;
    } catch (error) {
      console.error('Error fetching hike details:', error);
    }
  },
};
</script>

<!-- Подключение стилей -->
<style src="../assets/css/hikedetails.css"></style>
