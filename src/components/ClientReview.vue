<template>
  <div class="review-card">
    <img :src="screenshot" alt="screenshot of the review" class="review-screenshot" />
    <p>{{ name }}</p>
    <span>{{ position }}</span>
  </div>
</template>
  
<script setup>
defineProps({
  screenshot: String,
  name: String,
  position: String,
});
</script>
  
<style lang="scss" scoped>
.review-card {
  text-align: center;
  background-color: #1B1B1C;
  border-radius: 20px;
  width: 300px;
  padding: 20px;
  box-shadow:
    -5px 5px 10px rgba(19, 19, 20, 0.2),
    5px -5px 10px rgba(19, 19, 20, 0.2),
    -5px -5px 10px rgba(35, 35, 36, 0.9),
    5px 5px 13px rgba(19, 19, 20, 0.9),
    inset 1px 1px 2px rgba(35, 35, 36, 0.3),
    inset -1px -1px 2px rgba(19, 19, 20, 0.5);
  transition: transform 0.3s;

  img {
    max-height: 400px;
    width: auto;
  }
  p {
    text-align: center;
    font-weight: 600;
  }

  span {
    display: flex;
    justify-content: center;
  }
}

.review-card:hover {
  transform: scale(1.05);
}

.review-screenshot {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}
</style>