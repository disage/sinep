<script setup>
import { useRouter } from 'vue-router';
import Button from '../Button.vue';
const services = [
  { slug: 'target', name: 'Настройка таргета', duration: 'от 1 месяца' },
  { slug: 'website', name: 'Разработка сайта', duration: 'от 2-х недель' },
  { slug: 'marketing', name: 'Маркетинговое сопровождение', duration: 'от 1 месяца' },
  { slug: 'bot', name: 'Разработка бота', duration: 'от 2-х недель' },
  { slug: 'explainer', name: 'Создание эксплейнера', duration: 'от 1 месяца' },
  { slug: 'get-course', name: 'Разработка GetCourse платформы', duration: 'от 2-х недель' },
];
const router = useRouter();

const goToService = (slug) => {
  router.push(`/service/${slug}`);
};
</script>

<template>
  <section class="our-services-section">
    <h2>IT-услуги, которые помогут вам быть на шаг впереди</h2>
    <div class="services-list">
      <div class="services-list_item" v-for="(service, index) in services" :key="index">
        <span class="services-list_item-name">{{ service.name }}</span>
        <div class="row">
          <span class="services-list_item-duration">{{ service.duration }}</span>
          <Button @click="goToService(service.slug)">
            Заказать
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.our-services-section {
  h2 {
    text-align: center;
  }

  .services-list {
    margin: 100px auto auto auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1440px;

    &_item {
      justify-content: space-between;
      background: #1B1B1C;
      border-radius: 15px;
      border: 1px solid #1B1B1C;
      box-shadow: -5px 5px 10px rgba(19, 19, 20, 0.2), 5px -5px 10px rgba(19, 19, 20, 0.2), -5px -5px 10px rgba(35, 35, 36, 0.9), 5px 5px 13px rgba(19, 19, 20, 0.9), inset 1px 1px 2px rgba(35, 35, 36, 0.3), inset -1px -1px 2px rgba(19, 19, 20, 0.5);
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      padding: 30px;
      width: 40%;

      &-name {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
      }

      &-duration {
        display: flex;
      }

      .row {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .services-list {
    justify-content: center !important;
  }

  .services-list_item {
    width: 80% !important;
  }
}</style>