<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const config = {
  itemsToShow: 1.5
}
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="slide in 10" :key="slide">
      {{ slide }}
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>