<script setup>
import HeroSection from '../components/HomeView/HeroSection.vue'
import AboutUsSection from '../components/HomeView/AboutUsSection.vue'
import AboutServicesSection from '../components/HomeView/AboutServicesSection.vue'
import WhyWeSection from '../components/HomeView/WhyWeSection.vue'
import OurServicesSection from '@/components/HomeView/OurServicesSection.vue'
import CasesSection from '@/components/HomeView/CasesSection.vue'
import ContactsSection from '@/components/HomeView/ContactsSection.vue'
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
    <WhyWeSection/>
    <Divider/>
    <OurServicesSection/>
    <Divider/>
    <CasesSection/>
    <Divider/>
    <ContactsSection/>
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