<!-- components/Shared/Button.vue -->
<template>
    <button :class="`btn ${type}`" @click="onClick">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: 'primary',
      },
    },
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  .btn {
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn.primary {
    background-color: #007bff;
    color: white;
  }
  .btn.secondary {
    background-color: #6c757d;
    color: white;
  }
  </style>
  