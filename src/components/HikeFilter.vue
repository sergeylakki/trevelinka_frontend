<template>
    <div class="filter-controls">
      <!-- Иконка и заголовок фильтра -->
      <div class="icon-title">
        <div class="icon"></div>
        <h3>Filter Hikes</h3>
      </div>
  
      <label for="startDate">Show hikes from:</label>
      <input type="date" v-model="localStartDate" @change="applyFilter" />
  
      <label for="endDate">To:</label>
      <input type="date" v-model="localEndDate" @change="applyFilter" />
  
      <label for="sortOrder">Sort by date:</label>
      <select v-model="localSortOrder" @change="applyFilter">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
  
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
      startDate: String,
      endDate: String,
      sortOrder: String
    },
    data() {
      return {
        localStartDate: this.startDate,
        localEndDate: this.endDate,
        localSortOrder: this.sortOrder,
      };
    },
    emits: ['updateFilter'],
    methods: {
      applyFilter() {
        this.$emit('updateFilter', {
          startDate: this.localStartDate,
          endDate: this.localEndDate,
          sortOrder: this.localSortOrder
        });
      }
    }
  };
  </script>
  
  <style scoped>
.filter-controls {
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: #f0f4f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #dcdcdc;
}

.filter-controls label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.filter-controls input[type="date"],
.filter-controls select {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding: 10px;
  border: 1px solid #8eacbb;
  border-radius: 8px;
  background-color: #fff;
  color: #2c3e50;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-controls input[type="date"]:focus,
.filter-controls select:focus {
  border-color: #6fa3ef;
  outline: none;
  box-shadow: 0 0 8px rgba(111, 163, 239, 0.5);
}

.filter-controls select {
  cursor: pointer;
  width: 200px;
}

.filter-controls button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filter-controls button:hover {
  background-color: #388e3c;
}

.filter-controls .icon {
  width: 30px;
  height: 30px;
  background-image: url('../assets/images/icon.webp');
  background-size: cover;
  margin-right: 10px;
}

  </style>
  