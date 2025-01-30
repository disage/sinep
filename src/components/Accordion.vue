<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const toggleAccordion = (index) => {
  props.items[index].isOpen = !props.items[index].isOpen;
};
</script>
<template>
  <div class="accordion">
    <div class="accordion-item" :class="{ open: item.isOpen }" v-for="(item, index) in items" :key="index">
      <div class="accordion-header" @click="toggleAccordion(index)">
        <h3>{{ item.title }}</h3>
        <span class="icon">{{ item.isOpen ? '+' : '+' }}</span>
      </div>
      <div class="accordion-content" v-show="item.isOpen">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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