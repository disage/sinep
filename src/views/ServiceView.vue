<script setup>
import Divider from '@/components/Divider.vue';
import ServiceHeroSection from '@/components/ServiceView/ServiceHeroSection.vue';
</script>
<template>
    <main>
        <ServiceHeroSection />
        <Divider />
    </main>
</template>
<style lang="scss" scoped>
main {
    background: #1B1B1C;
    padding: 0 50px;
    max-width: 1920px;
    margin: auto;
}

@media screen and (max-width: 620px) {
    main {
        padding: 0 25px;
    }
}
</style>
