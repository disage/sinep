<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import Accordion from '@/components/Accordion.vue';
import CaseHeroSection from '@/components/CaseView/CaseHeroSection.vue';
import cases from '@/constants/cases-data'
import Divider from '@/components/Divider.vue';
import OrderBanner from '@/components/CaseView/OrderBanner.vue';
import ImageModal from '@/components/ImageModal.vue';


const route = useRoute();
const slug = computed(() => route.params.slug);
const casesList = ref(cases);
const currentCase = computed(() =>
    casesList.value.find(caseItem => caseItem.id === slug.value) || null
);
// const openImageInNewTab = (path) => {
//   window.open(path, '_blank');
// };
const isModalVisible = ref(false);
const selectedImage = ref(null);

const openModal = (image) => {
  selectedImage.value = image;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  selectedImage.value = null;
};

</script>
<template>
    <main>
        <CaseHeroSection />
        <Divider />
        <h2>Описание</h2>
        <Accordion :items="currentCase.info" />
        <Divider />
        <div v-if="currentCase.images" class="image-section">
            <div class="image-section__images-grid">
                <div v-for="(image, index) in currentCase.images" :key="index" class="image-card" @click="openModal(image)">
                <img :src="image.path" alt="project image" class="image-card__image" />
                <h3 class="image-card__title">{{ image.title }}</h3>
                </div>
            </div>
        </div>
        <Divider />
        <OrderBanner :service="currentCase.service"/>
        <Divider />
        <ImageModal 
            v-if="isModalVisible" 
            :image="{ src: selectedImage.path }" 
            :isVisible="isModalVisible"
            @close="closeModal" 
        />
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
    .image-section {
        padding: 40px;
        background: #1B1B1C;
        border-radius: 15px;
        box-shadow: 1px 1px 2px rgba(35, 35, 36, 0.3), -1px -1px 2px rgba(19, 19, 20, 0.5), inset -5px 5px 10px rgba(19, 19, 20, 0.2), inset 5px -5px 10px rgba(19, 19, 20, 0.2), inset -5px -5px 10px rgba(35, 35, 36, 0.9), inset 5px 5px 13px rgba(19, 19, 20, 0.9);
    }      
    .image-section__images-grid {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
        gap: 50px;
        .image-card {
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
          
              .image-card__title {
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
          }
      }
}

@media screen and (max-width: 620px) {
    main {
        padding: 0 25px;
    }
}
</style>
