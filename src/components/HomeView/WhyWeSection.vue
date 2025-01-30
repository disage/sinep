<script setup>
import { ref } from 'vue';
import Accordion from '../Accordion.vue';

const items = ref([
  { title: 'Индивидуальный подход', content: 'Мы знаем, что каждый бизнес уникален, поэтому создаём решения, которые полностью соответствуют вашим задачам и целям.', isOpen: true },
  { title: 'Команда экспертов', content: 'Дизайнеры, разработчики, маркетологи и аналитики — все мы работаем как единый механизм, чтобы ваш проект стал успешным.', isOpen: false },
  { title: 'Современные технологии', content: ' Мы всегда в курсе последних трендов и используем самые современные инструменты для реализации ваших идей.', isOpen: false },
  { title: 'Измеримый результат', content: 'Наша главная цель — ваш рост. Мы предоставляем отчёты, где видно, как наши решения помогают вашему бизнесу.', isOpen: false }
]);

const toggleAccordion = (index) => {
  items.value[index].isOpen = !items.value[index].isOpen;
};
</script>

<template>
    <section class="why-we-section">
      <h2 class="why-we-section_title">Почему выбирают нас?</h2>
      <Accordion :items="items"/>
    </section>
  </template>

<style lang="scss" scoped>
.why-we-section {
    box-sizing: border-box;
    min-height: 100vh;
}
h2 {
    text-align: center;
    margin-bottom: 100px;
}
  
</style>
