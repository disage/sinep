<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import Accordion from '@/components/Accordion.vue';
import CaseHeroSection from '@/components/CaseView/CaseHeroSection.vue';
import cases from '@/constants/cases-data'
import Divider from '@/components/Divider.vue';


const route = useRoute();
const slug = computed(() => route.params.slug);
const casesList = ref(cases);
const currentCase = computed(() =>
    casesList.value.find(caseItem => caseItem.id === slug.value) || null
);

</script>
<template>
    <main>
        <CaseHeroSection />
        <Divider />
        <h2>Описание</h2>
        <Accordion :items="currentCase.info" />
        <Divider />
    </main>
</template>
<style lang="scss" scoped>
main {
    background: #1B1B1C;
    padding: 0 50px;
    max-width: 1920px;
    margin: auto;

    h2 {
        text-align: center;
    }
}

@media screen and (max-width: 620px) {
    main {
        padding: 0 25px;
    }
}
</style>
