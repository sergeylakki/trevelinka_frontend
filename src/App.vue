<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/hikes">Hikes List</router-link></li>
          <li><router-link to="/create-hike">Create Hike</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>

    <router-view></router-view>

    <footer>
      <p>Explore the great outdoors with us. Follow us on social media.</p>
      <div class="social-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<!-- Подключение стилей -->
<style src="./assets/css/app.css"></style>
