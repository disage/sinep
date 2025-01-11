<template>
    <section>
        <h2 class="case-section__title">Наши кейсы</h2>
        <div tion class="case-section">
        <div class="case-section__grid">
            <div
            v-for="caseItem in cases"
            :key="caseItem.id"
            class="case-card"
            @click="goToCase(caseItem.id)"
            >
            <img :src="caseItem.image" :alt="caseItem.title" class="case-card__image" />
            <h3 class="case-card__title">{{ caseItem.title }}</h3>
            <p class="case-card__description">{{ caseItem.description }}</p>
            </div>
        </div>
        </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';

  export default {
    name: 'CaseSection',
    setup() {
      const cases = ref([
        {
          id: 1,
          title: 'TalentInsight',
          description: 'Описание первого кейса',
          image: 'src/assets/images/case_TI.png',
        },
        {
          id: 2,
          title: 'Рестомания',
          description: 'Описание второго кейса',
          image: 'src/assets/images/case_TI.png',
        },
        {
          id: 3,
          title: 'M1M',
          description: 'Описание третьего кейса',
          image: 'src/assets/images/case_TI.png',
        },
      ]);
  
      const goToCase = (id) => {
        window.location.href = `/cases/${id}`;
      };
  
      return {
        cases,
        goToCase,
      };
    },
  };
  </script>

<style lang="scss" scoped>
  
.case-section__title {
    text-align: center;
    color: #EEEAE6;
    margin: auto;
    margin-bottom: 100px;
  }
.case-section {
    padding: 40px;
    background: #1B1B1C;
    border-radius: 15px;

border: 1px solid #1B1B1C;
box-shadow: 1px 1px 2px rgba(35, 35, 36, 0.3), -1px -1px 2px rgba(19, 19, 20, 0.5), inset -5px 5px 10px rgba(19, 19, 20, 0.2), inset 5px -5px 10px rgba(19, 19, 20, 0.2), inset -5px -5px 10px rgba(35, 35, 36, 0.9), inset 5px 5px 13px rgba(19, 19, 20, 0.9);

  
    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
  }
  
  .case-card {
    background: #1B1B1C;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: -5px 5px 10px rgba(14, 14, 14, 0.2), 5px -5px 10px rgba(14, 14, 14, 0.2), -5px -5px 10px rgba(41, 41, 42, 0.9), 5px 5px 13px rgba(14, 14, 14, 0.9), inset 1px 1px 2px rgba(41, 41, 42, 0.3), inset -1px -1px 2px rgba(14, 14, 14, 0.5);
    cursor: pointer;
  
    &:hover {
      transform: translateY(-5px);
      box-shadow: -5px 5px 10px rgba(14, 14, 14, 0.2), 5px -5px 10px rgba(14, 14, 14, 0.2), -5px -5px 10px rgba(41, 41, 42, 0.9), 5px 5px 13px rgba(14, 14, 14, 0.9), inset 1px 1px 2px rgba(41, 41, 42, 0.3), inset -1px -1px 2px rgba(14, 14, 14, 0.5);
    }
  
    &__image {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 15px;
    }
  
    &__title {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 10px;
    }
  
    &__description {
      font-size: 1rem;
      color: #666;
    }
  }
  
</style>