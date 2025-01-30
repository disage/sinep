  
<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollTo = (sectionName) => {
  const currentRoute = router.currentRoute.value;

  if (currentRoute.name !== 'home') {
    router.push({ name: 'home', hash: `#${sectionName}` });
  } else {
    const section = document.querySelector(`[data-section="${sectionName}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
const goToHome = () => {
  router.push(`/`);
};
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="header-navigations">
        <img @click="goToHome()" class="header__logo" src="../assets/images/mini_logo.png" />
        <nav class="header__nav">
          <ul>
            <li @click="scrollTo('aboutSection')" class="header__link">Про нас</li>
            <li @click="scrollTo('servicesSection')" class="header__link">Услуги</li>
            <li @click="scrollTo('casesSection')" class="header__link">Кейсы</li>
            <li class="header__link">Отзывы</li>
            <li @click="scrollTo('contactsSection')" class="header__link">Контакты</li>
          </ul>
        </nav>
      </div>
      <div class="header__controls">
        <!-- <div class="dropdown">
          <button class="dropdown__button">RU</button>
          <ul class="dropdown__menu">
            <li class="dropdown__item">UA</li>
            <li class="dropdown__item">EN</li>
            <li class="dropdown__item">DE</li>
          </ul>
        </div> -->
        <div class="hamburger_wrapper">
          <button class="hamburger" @click="toggleMenu">
            <span class="hamburger__line" :class="{ 'hamburger__line--top': isMenuOpen }"></span>
            <span class="hamburger__line" :class="{ 'hamburger__line--middle': isMenuOpen }"></span>
            <span class="hamburger__line" :class="{ 'hamburger__line--bottom': isMenuOpen }"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
$background-color: #181819;
$text-color: #EEEAE6;

.header-content {
  width: 100%;
  max-width: 1920px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header {
  background: #181819;
  box-shadow: -5px 5px 10px rgba(17, 17, 17, 0.2), 5px -5px 10px rgba(17, 17, 17, 0.2), -5px -5px 10px rgba(31, 31, 33, 0.9), 5px 5px 13px rgba(17, 17, 17, 0.9), inset 1px 1px 2px rgba(31, 31, 33, 0.3), inset -1px -1px 2px rgba(17, 17, 17, 0.5);
  position: fixed;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  padding: 10px 50px;
  background-color: $background-color;
  z-index: 10;

  &__logo {
    margin-right: 20px;
    cursor: pointer;
    height: 50px;
    width: 50px;
  }

  &__nav {
    ul {
      list-style: none;
      display: flex;
      gap: 20px;

      li {
        cursor: pointer;
      }
    }

    .header__link {
      text-decoration: none;
      color: #BEBEBE;
      font-size: 1rem;
      transition: color 0.3s;

      &:hover {
        color: #EEEAE6;
      }
    }
  }

  &-navigations {
    display: flex;
    align-items: center;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 1rem;

    .dropdown {
      position: relative;

      &__button {
        background-color: $background-color;
        color: $text-color;
        border: none;
        padding: 11px 16px;
        border-radius: 8px;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }

      &__menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: $background-color;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        list-style: none;
        margin: 0;
        padding: 0.5rem 0;

        .dropdown__item {
          padding: 0.5rem 1rem;
          color: $text-color;
          cursor: pointer;
        }
      }

      &:hover .dropdown__menu {
        display: block;
      }
    }

    .hamburger_wrapper {
      background-color: $background-color;
      padding: 9px 16px;
      border-radius: 8px;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.1);
      display: none;
    }

    .hamburger {
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 20px;
      justify-content: space-between;
      padding: 0;
      position: relative;
      width: 20px;
      z-index: 10;

      .hamburger__line {
        width: 100%;
        height: 2px;
        background-color: #eeeae6;
        border-radius: 10px;
        transition: transform 0.3s ease, opacity 0.3s ease;

        &:nth-child(1) {
          transform-origin: top left;
        }

        &:nth-child(2) {
          transition: opacity 0.3s ease;
        }

        &:nth-child(3) {
          transform-origin: bottom left;
        }

        &.hamburger__line--top {
          transform: rotate(45deg) translate(2px, 2px);
        }

        &.hamburger__line--middle {
          opacity: 0;
        }

        &.hamburger__line--bottom {
          transform: rotate(-45deg) translate(2px, -2px);
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .header__nav {
    display: none;
  }
  .hamburger_wrapper {
    display: flex!important;
  }
}

@media screen and (max-width: 620px) {
  header {
    padding: 10px 25px !important;
  }
}
</style>