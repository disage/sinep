<script setup>
import HeroSection from '../components/HomeView/HeroSection.vue'
import AboutUsSection from '../components/HomeView/AboutUsSection.vue'
import AboutServicesSection from '../components/HomeView/AboutServicesSection.vue'
import Divider from '../components/Divider.vue'

</script>

<template>
  <main>
    <HeroSection/>
    <Divider/>
    <AboutUsSection/>
    <Divider/>
    <AboutServicesSection/>
    <Divider/>
  </main>
</template>

<style lang="scss" scoped>

main {
  background: #1B1B1C;
  padding: 0 50px;
  max-width: 1920px;
  margin: auto;
}
</style>