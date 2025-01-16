import { reactive } from 'vue';

const eventBus = reactive({
  listeners: {},
  $on(event, fn) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(fn);
  },
  $emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(fn => fn(data));
    }
  },
  $off(event, fn) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== fn);
    }
  },
});

export default eventBus;