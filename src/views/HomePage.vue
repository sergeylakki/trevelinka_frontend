<template>
    <section class="hero">
      <div class="hero-content">
        <h1>Plan Your Next Mountain Adventure</h1>
        <p>Join us for an unforgettable journey through the mountains.</p>
        <router-link to="/hikes" class="btn-primary">Explore Hikes</router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <!-- Подключение стилей -->
  <style src="../assets/css/homepage.css"></style>
  