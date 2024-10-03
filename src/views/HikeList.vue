<template>
    <div>
      <!-- Подключаем фильтр -->
      <HikeFilter 
        :startDate="filter.startDate"
        :endDate="filter.endDate"
        :sortOrder="filter.sortOrder"
        @updateFilter="updateFilter" 
      />
  
      <section class="hikes-list">
        <div v-if="loading" class="loading">Loading hikes...</div>
        <div v-else class="hikes-grid">
          <HikeCard
            v-for="hike in filteredAndSortedHikes"
            :key="hike.id"
            :id="hike.id"
            :title="hike.title"
            :description="hike.description"
            :image="hike.image"
          />
        </div>
        <div v-if="error" class="error">{{ error }}</div>
      </section>
    </div>
  </template>
  
  <script>
  import { useHikeStore } from '../store/hikes';
  import HikeCard from '../components/HikeCard.vue';
  import HikeFilter from '../components/HikeFilter.vue';
  
  export default {
    components: {
      HikeCard,
      HikeFilter,
    },
    data() {
      return {
        filter: {
          startDate: '',  // Инициализация значений
          endDate: '',    // Инициализация значений
          sortOrder: 'asc', // Начальная сортировка (по возрастанию)
        },
      };
    },
    computed: {
      hikes() {
        return this.hikeStore.hikes;
      },
      filteredAndSortedHikes() {
        let hikes = [...this.hikes];
  
        // Фильтрация по диапазону дат
        if (this.filter.startDate) {
          const startDate = new Date(this.filter.startDate);
          hikes = hikes.filter(hike => new Date(hike.date) >= startDate);
        }
        if (this.filter.endDate) {
          const endDate = new Date(this.filter.endDate);
          hikes = hikes.filter(hike => new Date(hike.date) <= endDate);
        }
  
        // Сортировка по дате
        hikes.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return this.filter.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
  
        return hikes;
      },
      loading() {
        return this.hikeStore.loading;
      },
      error() {
        return this.hikeStore.error;
      },
    },
    created() {
      this.hikeStore.fetchHikes();
    },
    setup() {
      const hikeStore = useHikeStore();
      return { hikeStore };
    },
    methods: {
      updateFilter(filterData) {
        this.filter = filterData;  // Обновляем объект фильтрации
      }
    }
  };
  </script>
  
  <!-- Подключение стилей -->
  <style src="../assets/css/hikeslist.css"></style>
  