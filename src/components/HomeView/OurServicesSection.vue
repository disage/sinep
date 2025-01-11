<script setup>
import Button from '../Button.vue';
const items = [
  { name: 'Таргет', duration: 'от 1 месяца'},
  { name: 'Разработка сайта', duration: 'от 2-х недель'},
  { name: 'Маркетинговое сопровождение', duration: 'от 1 месяца'},
  { name: 'Разработка ботов', duration: 'от 2-х недель'},
  { name: 'Создание эксплейнеров', duration: 'от 1 месяца'},
  { name: 'Создание гет курсов', duration: 'от 2-х недель'},
];
</script>

<template>
  <section class="our-services-section">
      <h2>IT-услуги, которые помогут вам быть на шаг впереди</h2>
      <div class="services-list">
          <div class="services-list_item" v-for="(item, index) in items" :key="index">
            <span class="services-list_item-name">{{item.name}}</span>
            <div class="row">
              <span class="services-list_item-duration">{{item.duration}}</span>
              <Button>
                  <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 1.607 0 1.5zM4.982 6l1 5H12l1.19-6H4.982z"/>
                      <path d="M7.5 9.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm-3 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm6 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z"/>
                    </svg>
                  </template>
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
</style>