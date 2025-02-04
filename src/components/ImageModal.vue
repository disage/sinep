<template>
    <div v-if="isVisible" class="modal" @click.self="close">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <img :src="image.src" alt="Large Image" class="modal-image" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    image: Object,
    isVisible: Boolean,
  });
  
  const emit = defineEmits(['close']);
  
  const close = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    z-index: 1001;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    display: flex;
    justify-content: center;
    position: relative;
  }
  
  .close {
    position: absolute;
    top: 0px;
    right: 20px;
    color: white;
    font-size: 30px;
    cursor: pointer;
  }
  
  .modal-image {
    max-width: 90%;
    max-height: 90%;
  }
  </style>