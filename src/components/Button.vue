<template>
    <button class="neumorphic-button">
      <span class="icon">
        <slot name="icon"></slot>
      </span>
      <span class="text">
        <slot></slot>
      </span>
    </button>
  </template>
  
  <script setup>
  // Компонент полностью управляется слотами для максимальной гибкости
  </script>
  
  <style scoped>
  .neumorphic-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #1B1B1C;
    color: #EEEAE6;
    font-size: 16px;
    font-weight: 500;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .neumorphic-button:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7), -2px -2px 6px rgba(255, 255, 255, 0.2);
  }
  
  .neumorphic-button:active {
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.8), inset -4px -4px 8px rgba(255, 255, 255, 0.1);
  }
  
  .icon {
    display: flex;
    align-items: center;
  }
  
  .text {
    display: flex;
    align-items: center;
  }
  </style>
  