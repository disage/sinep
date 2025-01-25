<template>
  <section>
    <h2 class="case-section__title">Наши кейсы</h2>
    <div class="case-section">
      <div v-if="!slug" class="case-filters">
        <Button
          v-for="filter in filters" 
          :key="filter" 
          @click="applyFilter(filter)" 
          :class="{ 'active-filter': currentFilter === filter }"
        >
          {{ filterNames[filter] }}
        </Button>

      </div>
      <div class="case-section__grid">
        <div
          v-for="caseItem in filteredCases"
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
  import { ref, computed } from 'vue';
  import { useRouter, useRoute} from 'vue-router';
  import Button from '../Button.vue';

  export default {
    name: 'CaseSection',
    setup() {
        const route = useRoute();
        const slug = computed(() => route.params.slug);
        const filters = ref(["website", "uiux", "target", "marketing"]);
        const filterNames = ref({
            website: "Website",
            uiux: "UI/UX",
            target: "Target",
            marketing: "Marketing"
        });
        const cases = ref([
            {
                id: 1,
                title: 'TalentInsight',
                description: 'Описание первого кейса',
                image: new URL('@/assets/images/case_TI.png', import.meta.url).href,
                category: "website"
            },
            {
                id: 2,
                title: 'Рестомания',
                description: 'Описание второго кейса',
                image: new URL('@/assets/images/case_TI.png', import.meta.url).href,
                category: "website"
            },
            {
                id: 3,
                title: 'M1M',
                description: 'Описание третьего кейса',
                image: new URL('@/assets/images/case_TI.png', import.meta.url).href,
                category: "website"
            },
            {
                id: 4,
                title: 'M1M',
                description: 'Описание третьего кейса',
                image: new URL('@/assets/images/case_TI.png', import.meta.url).href,
                category: "website"
            },
            {
                id: 6,
                title: 'TalentInsight',
                description: 'Описание TalentInsight кейса',
                image: new URL('@/assets/images/case_TI.png', import.meta.url).href,
                category: "uiux"
            },
            {
                id: 7,
                title: 'M1M',
                description: 'Описание M1M кейса',
                image: new URL('@/assets/images/case_TI.png', import.meta.url).href,
                category: "uiux"
            },
            {
                id: 8,
                title: 'Target Case 1',
                description: 'Описание target кейса',
                image: new URL('@/assets/images/case_TI.png', import.meta.url).href,
                category: "target"
            },
        ]);
        const router = useRouter();
        const currentFilter = ref(slug.value || "website"); // Начальное значение для currentFilter
        const filteredCases = computed(() => {
            return cases.value.filter(caseItem => caseItem.category === currentFilter.value);
        });
        const applyFilter = (filter) => {
            currentFilter.value = filter;
        };
        const goToCase = (id) => {
            router.push(`/case/${id}`);
        };
        return {
            cases,
            currentFilter,
            goToCase,
            applyFilter,
            filters,
            filteredCases,
            filterNames,
            slug
        };
    },
    components: { Button }
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
    box-shadow: 1px 1px 2px rgba(35, 35, 36, 0.3), -1px -1px 2px rgba(19, 19, 20, 0.5), inset -5px 5px 10px rgba(19, 19, 20, 0.2), inset 5px -5px 10px rgba(19, 19, 20, 0.2), inset -5px -5px 10px rgba(35, 35, 36, 0.9), inset 5px 5px 13px rgba(19, 19, 20, 0.9);

  
    &__grid {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
      gap: 50px;
    }
  }
  .case-filters {
    display: flex;
    border-radius: 10px;
    justify-content: center;
    gap: 20px;
    box-shadow: 1px 1px 2px rgba(38, 38, 40, 0.3), -1px -1px 2px rgba(16, 16, 16, 0.5), inset -1px 1px 2px rgba(16, 16, 16, 0.2), inset 1px -1px 2px rgba(16, 16, 16, 0.2), inset -1px -1px 2px rgba(38, 38, 40, 0.9), inset 1px 1px 3px rgba(16, 16, 16, 0.9);
    width: fit-content;
    padding: 10px 20px;
    margin: auto;
    margin-bottom: 50px;
    .active-filter {
          box-shadow: 1px 1px 2px rgba(38, 38, 40, 0.3), -1px -1px 2px rgba(16, 16, 16, 0.5), inset -1px 1px 2px rgba(16, 16, 16, 0.2), inset 1px -1px 2px rgba(16, 16, 16, 0.2), inset -1px -1px 2px rgba(38, 38, 40, 0.9), inset 1px 1px 3px rgba(16, 16, 16, 0.9);
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
      transform: translateY(-10px);
      box-shadow: -5px 5px 10px rgba(14, 14, 14, 0.2), 5px -5px 10px rgba(14, 14, 14, 0.2), -5px -5px 10px rgba(41, 41, 42, 0.9), 5px 5px 13px rgba(14, 14, 14, 0.9), inset 1px 1px 2px rgba(41, 41, 42, 0.3), inset -1px -1px 2px rgba(14, 14, 14, 0.5);
      .case-card__title {
        color: #CAA153;
      }
    }
  
    &__image {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 15px;
    }
  
    &__title {
      transition: 0.3s;
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 10px;
      font-weight: 600;
    }
  
    &__description {
      font-size: 1rem;
      color: #666;
    }
  }

</style>