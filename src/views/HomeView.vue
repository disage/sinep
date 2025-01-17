<script setup>
import HeroSection from '../components/HomeView/HeroSection.vue'
import AboutUsSection from '../components/HomeView/AboutUsSection.vue'
import AboutServicesSection from '../components/HomeView/AboutServicesSection.vue'
import WhyWeSection from '../components/HomeView/WhyWeSection.vue'
import OurServicesSection from '@/components/HomeView/OurServicesSection.vue'
import CasesSection from '@/components/HomeView/CasesSection.vue'
import ContactsSection from '@/components/HomeView/ContactsSection.vue'
import Footer from '@/components/Footer.vue'

import Divider from '../components/Divider.vue'
</script>

<template>
  <main>
    <HeroSection data-section="hero"/>
    <Divider/>
    <AboutUsSection data-section="aboutSection" ref="aboutSection"/>
    <Divider/>
    <AboutServicesSection />
    <Divider/>
    <WhyWeSection data-section="whyWeSection" ref="whyWeSection"/>
    <Divider/>
    <OurServicesSection data-section="servicesSection" ref="servicesSection"/>
    <Divider/>
    <CasesSection data-section="casesSection" ref="casesSection"/>
    <Divider/>
    <ContactsSection data-section="contactsSection" ref="contactsSection"/>
    <Divider/>
    <Footer/>
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

