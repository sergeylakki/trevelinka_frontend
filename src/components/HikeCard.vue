<template>
    <div class="hike-card">
      <img :src="image || defaultImage" :alt="title" class="hike-image" />
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <router-link :to="`/hikes/${id}`" class="btn-secondary">View Details</router-link>
    </div>
  </template>
  
  <script>
  import defaultImage from '@/assets/images/background.webp';
  
  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
        defaultImage,
      };
    },
  };
  </script>
  