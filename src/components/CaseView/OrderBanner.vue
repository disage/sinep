<script setup>
import Button from '../Button.vue';
const redirectTo = (url) => {
    window.location.href = url;
};
const props = defineProps({
    service: {
        type: String,
        required: true
    }
});

const bannerContent = {
    target: {
        title: "Хотите привлечь новых клиентов и увеличить прибыль?",
        description: "Обращайтесь к нам — мы настроим таргетированную рекламу, которая работает на результат",
        briefLink: "https://docs.google.com/forms/d/e/1FAIpQLSenNBvMym_j_WDjXTNu6OXcEdMzRgyoZE6k2Q6HxdvKJ4h2Dg/viewform"
    },
    bot: {
        title: "Хотите привлечь новых клиентов и увеличить прибыль?",
        description: "Обращайтесь к нам — мы настроим таргетированную рекламу, которая работает на результат",
        briefLink: "https://docs.google.com/forms/d/1T0XMWAKDO7JgmAKF8x9FVtDK_OhX7hCrqYf2J6dEdIU/"
    },
    marketing: {
        title: "Хотите привлечь новых клиентов и увеличить прибыль?",
        description: "Обращайтесь к нам — мы настроим таргетированную рекламу, которая работает на результат",
        briefLink: "https://docs.google.com/forms/d/1T0XMWAKDO7JgmAKF8x9FVtDK_OhX7hCrqYf2J6dEdIU/"
    },
    website: {
        title: "Хотите привлечь новых клиентов и увеличить прибыль?",
        description: "Обращайтесь к нам — мы настроим таргетированную рекламу, которая работает на результат",
        briefLink: "https://docs.google.com/forms/d/1T0XMWAKDO7JgmAKF8x9FVtDK_OhX7hCrqYf2J6dEdIU/"
    },
    explainer: {
        title: "Хотите привлечь новых клиентов и увеличить прибыль?",
        description: "Обращайтесь к нам — мы настроим таргетированную рекламу, которая работает на результат",
        briefLink: "https://docs.google.com/forms/d/1T0XMWAKDO7JgmAKF8x9FVtDK_OhX7hCrqYf2J6dEdIU/"
    },
    'get-course': {
        title: "Хотите собственную платформу на геткурс ?",
        description: "Обращайтесь к нам — мы настроим таргетированную рекламу, которая работает на результат",
        briefLink: "https://docs.google.com/forms/d/1T0XMWAKDO7JgmAKF8x9FVtDK_OhX7hCrqYf2J6dEdIU/"
    }
}
</script>

<template>
    <div class="banner">
        <div class="banner-info">
            <h2 class="banner_info__title">{{ bannerContent[props.service].title }}</h2>
            <p class="banner_info__description">{{ bannerContent[props.service].description }}</p>
            <Button @click="redirectTo(bannerContent[props.service].briefLink)">Заполнить бриф</Button>
        </div>
        <div class="banner-image">
            <img src="../../assets/images/orderBannerImage.svg" alt="service_website_img">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    display: flex;
    justify-content: center;
    gap: 50px;

    .banner-info {
        width: 40%;

        h2 {
            margin-bottom: 20px;
        }

        p {
            margin-bottom: 50px;
        }
    }

    .banner-image {
        text-align: center;
        width: 30%;
    }
}

@media screen and (max-width: 900px) {
    .banner {
        flex-wrap: wrap;

        .banner-info {
            width: 100%;
        }

        .banner-image {
            width: 100%;
        }
    }
}
</style>