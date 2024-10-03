// store/hikes.js
import { defineStore } from 'pinia';
import axios from 'axios';
export const useHikeStore = defineStore('hikes', {
  state: () => ({
    hikes: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchHikes() {
        this.loading = true;
        try {
          const response = await axios.get('http://localhost:8000/hikes/');
          this.hikes = response.data;
        } catch (error) {
          this.error = 'Failed to fetch hikes';
          console.error(error);
        } finally {
          this.loading = false;
        }
    },
    async createHike(newHike) {
      await axios.post('/hikes/', newHike);
      this.fetchHikes();
    },
  },
});
