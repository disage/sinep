<script setup>
import { ref } from 'vue';

const items = ref([
  { title: 'Пасадочная страница', content: 'Идеальна для продвижения одного продукта или услуги. Помогает привлечь внимание, заинтересовать и стимулировать клиента к действию (например, оставить заявку или купить).', isOpen: true },
  { title: 'Cайт визитка', content: 'Отличный выбор для малого бизнеса или специалистов. Содержит основную информацию о вас, ваши контакты и ключевые преимущества, чтобы потенциальные клиенты могли легко найти и связаться с вами.', isOpen: false },
  { title: 'Многостраничный сайт', content: ' Подходит для крупных проектов, интернет-магазинов или компаний с широким спектром услуг. Сайты такого типа позволяют структурировать информацию и улучшить пользовательский опыт.', isOpen: false },
  { title: 'Платформа', content: 'Это сложные система, такая как онлайн-школа, маркетплейс или сервис с индивидуальными настройками. Помогает организовать бизнес-процессы и взаимодействие с клиентами.', isOpen: false }
]);

const toggleAccordion = (index) => {
  items.value[index].isOpen = !items.value[index].isOpen;
};
</script>

<template>
    <section class="why-we-section">
      <h2 class="why-we-section_title">Виды Веб-сайтов</h2>
      <div class="accordion">
        <div 
          class="accordion-item"
          :class="{ open: item.isOpen }"               
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="accordion-header" @click="toggleAccordion(index)">
            <h3>{{ item.title }}</h3>
            <span class="icon">{{ item.isOpen ? '+' : '+' }}</span>
          </div>
          <div class="accordion-content" v-show="item.isOpen">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
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
.accordion {
    width: 80%;
    max-width: 800px;
    margin: auto;
  }
  
  .accordion-item {
    background: #1B1B1C;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: -5px 5px 10px rgba(19, 19, 20, 0.2), 5px -5px 10px rgba(19, 19, 20, 0.2), -5px -5px 10px rgba(35, 35, 36, 0.9), 5px 5px 13px rgba(19, 19, 20, 0.9), inset 1px 1px 2px rgba(35, 35, 36, 0.3), inset -1px -1px 2px rgba(19, 19, 20, 0.5);
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    user-select: none;
    color: #EEEAE6;
  }
  
  .accordion-header h3 {
    margin: 0;
    font-size: 18px;
    transition: 0.3s ease;
    font-weight: 500;
  }
  
  .accordion-header .icon {
    font-size: 24px;
    color: #EEEAE6;
    transition: 0.3s ease;
  }
  
  .accordion-content {
    overflow: hidden;
    padding: 0 20px 5px 20px;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }
  
  .accordion-content p {
    margin: 15px 0;
  }
  
  .accordion-item.open .accordion-content {
    opacity: 1;
  }
  .accordion-item.open .accordion-header {
    color: #CAA153;
  }
  
  .accordion-item.open .icon {
    content: '+';
    transform: rotate(45deg);
    color: #CAA153;
    transition: 0.3s ease;
  }

  @media screen and (max-width: 620px) {
    .accordion {
      width: 100%;
    }
  }
  
</style>
