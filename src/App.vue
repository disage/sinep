<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
const routerView = ref(null);
import eventBus from './helpers/eventBus'
const scrollToSection = (sectionName) => {
  // Имитация доступа к рефу через Event Bus
  const section = document.querySelector(`[data-section="${sectionName}"]`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start'});
  } else {
    console.warn(`Секция ${sectionName} не найдена`);
  }
};

onMounted(() => {
  eventBus.$on('scroll-to-section', scrollToSection);
});
</script>

<template>
  <Header @scroll-to-section="scrollToSection" />
  <RouterView ref="routerView" />
  <Footer />
</template>

<style scoped>

</style>
