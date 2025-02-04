<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Divider from '@/components/Divider.vue';
import ServiceHeroSection from '@/components/ServiceView/ServiceHeroSection.vue';
import ServiceTypesSection from '@/components/ServiceView/ServiceTypesSection.vue';
import ServiceStepsSection from '@/components/ServiceView/ServiceStepsSection.vue';
import CasesSection from '@/components/HomeView/CasesSection.vue';
import OrderBanner from '@/components/CaseView/OrderBanner.vue';

const route = useRoute();
const slug = computed(() => route.params.slug);

</script>
<template>
    <main>
        <ServiceHeroSection data-section="heroSection" />
        <Divider />
        <ServiceTypesSection v-if="slug === 'website'" data-section="serviceTypesSection" />
        <Divider v-if="slug === 'website'" />
        <ServiceStepsSection data-section="stepsSection" />
        <Divider />
        <CasesSection data-section="casesSection"/>
        <Divider />
        <OrderBanner :service="slug" data-section="orderBanner"/>
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
