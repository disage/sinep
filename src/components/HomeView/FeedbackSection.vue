<template>
  <div>
    <h2>Отзывы</h2>
    <div class="review-slider">
      <div class="button-container">
        <button @click="prevReview">⬅️</button>
        <button @click="nextReview">➡️</button>
      </div>
      <div class="reviews">
        <ClientReview v-for="(review, index) in visibleReviews" :key="index" :screenshot="review.screenshot"
          :name="review.name" :position="review.position" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import ClientReview from '../ClientReview.vue';

const reviews = ref([
  { name: "Арсен Макарян", position: "CEO", screenshot: new URL('@/assets/images/feedback/feedback_1.jpg', import.meta.url).href }, // Путь к скриншотам отзыва
  { name: "Мелстрой", position: "Owner", screenshot: new URL('@/assets/images/feedback/feedback_1.jpg', import.meta.url).href },
  { name: "2", position: "Owner", screenshot: new URL('@/assets/images/feedback/feedback_1.jpg', import.meta.url).href },
  { name: "йцуйу", position: "Owner", screenshot: new URL('@/assets/images/feedback/feedback_1.jpg', import.meta.url).href },
]);

const currentIndex = ref(0);
const numberOfReviewsToShow = ref(3);

const visibleReviews = computed(() => {
  return reviews.value.slice(currentIndex.value, currentIndex.value + numberOfReviewsToShow.value);
});

const nextReview = () => {
  if (currentIndex.value + numberOfReviewsToShow.value < reviews.value.length) {
    currentIndex.value += 1;
  } else {
    currentIndex.value = 0;
  }
};

const prevReview = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  } else {
    currentIndex.value = reviews.value.length - numberOfReviewsToShow.value;
  }
};

const updateNumberOfReviewsToShow = () => {
  if (window.innerWidth < 900) {
    numberOfReviewsToShow.value = 1;
  } else if (window.innerWidth < 1400) {
    numberOfReviewsToShow.value = 2;
  } else {
    numberOfReviewsToShow.value = 3;
  }
};

onMounted(() => {
  updateNumberOfReviewsToShow();
  window.addEventListener('resize', updateNumberOfReviewsToShow);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateNumberOfReviewsToShow);
});
</script>

<style scoped>
h2 {
  text-align: center;
}

.review-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.button-container {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  margin-bottom: 10px;
}

.reviews {
  display: flex;
  overflow: hidden;
  transition: transform 0.5s ease;
  gap: 50px;
  padding: 50px;
  max-width: 80%;
}

@media (max-width: 600px) {
  .button-container {
    position: relative;
    margin-bottom: 15px;
  }

  .button-container button {
    flex: 1;
    margin: 0 5px;
  }
}
</style>