<template>
    <form class="create-hike">
      <h2>Create a New Hike</h2>
      <input type="text" placeholder="Hike Title" v-model="hike.title" />
      <textarea placeholder="Hike Description" v-model="hike.description"></textarea>
      <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="hike.date" required />
      </div>
      <button @click.prevent="submitHike" class="btn-primary">Create Hike</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        hike: {
        title: '',
        description: '',
        },
      };
    },
    methods: {
    async submitHike() {
      try {
        const response = await axios.post('http://localhost:8000/hikes/', this.hike);
        console.log('Hike created successfully:', response.data);
        this.$router.push('/hikes');  // Перенаправление на страницу со списком походов после создания
      } catch (error) {
        console.error('Error creating hike:', error);
      }
    },
  },
  };
  </script>
  
  <!-- Подключение стилей -->
  <style src="../assets/css/createhike.css"></style>
  