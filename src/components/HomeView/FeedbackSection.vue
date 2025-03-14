<template>
  <div>
    <h2>Отзывы</h2>
    <div class="review-slider">
      <div class="button-container">
        <Button @click="prevReview"><svg width="42" height="30" viewBox="0 0 42 30" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768158 14.0948 0.0768158 13.3137 0.857864L0.585786 13.5858ZM42 13L2 13V17L42 17V13Z"
              fill="#BCBCBC" />
          </svg>
        </Button>
        <Button @click="nextReview"><svg width="42" height="30" viewBox="0 0 42 30" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M41.4142 16.4142C42.1953 15.6332 42.1953 14.3668 41.4142 13.5858L28.6863 0.857869C27.9052 0.0768207 26.6389 0.0768205 25.8579 0.857869C25.0768 1.63892 25.0768 2.90525 25.8579 3.6863L37.1716 15L25.8579 26.3137C25.0768 27.0948 25.0768 28.3611 25.8579 29.1421C26.6389 29.9232 27.9052 29.9232 28.6863 29.1421L41.4142 16.4142ZM-3.49691e-07 17L40 17L40 13L3.49691e-07 13L-3.49691e-07 17Z"
              fill="#BCBCBC" />
          </svg>
        </Button>
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
import Button from '../Button.vue';
import ClientReview from '../ClientReview.vue';

const reviews = ref([
  // { name: "Остап", position: "Заместитель директора 'VIP Maste'", screenshot: new URL('@/assets/images/feedback/feedback_1.jpg', import.meta.url).href },
  { name: "Ольга", position: "Владелец 'GoMerch'", screenshot: new URL('@/assets/images/feedback/feedback_4.jpg', import.meta.url).href },
  { name: "Елена", position: "HR 'Real Esteyt'", screenshot: new URL('@/assets/images/feedback/feedback_2.jpg', import.meta.url).href },
  { name: "Артур Саакян", position: "владелец 'Crystal Ride Detailing'", screenshot: new URL('@/assets/images/feedback/feedback_3.jpg', import.meta.url).href },
  { name: "Алевтина", position: "тату мастер 'Tattoo bite'", screenshot: new URL('@/assets/images/feedback/feedback_5.jpg', import.meta.url).href },
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
}</style>