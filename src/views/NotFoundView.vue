
<script setup>
import Button from '@/components/Button.vue';
import Divider from '@/components/Divider.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
    router.push(`/`);
};

</script>
<template>
    <div class="not-found">
        <img src="../assets/images/404.png" />
        <h2>Страница не найдена !</h2>
        <Button @click="goHome">На главную</Button>
        <Divider />
    </div>
</template>
  
<style lang="scss" scoped>
.not-found {
    background: #1B1B1C;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100vh;
    align-items: center;
    padding-top: 100px;

    img {
        display: flex;
        width: 40%;
    }

    h2 {
        text-align: center;
    }
}

@media screen and (max-width: 1440px) {
    .not-found {
        img {
            width: 50%;
        }
    }
  }
@media screen and (max-width: 900px) {
    .not-found {
        img {
            width: 70%;
        }
    }
  }
@media screen and (max-width: 625px) {
    .not-found {
        img {
            width: 90%;
        }
    }
  }
</style>