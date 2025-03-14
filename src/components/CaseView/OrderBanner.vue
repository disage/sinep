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
        briefLink: "https://docs.google.com/forms/d/1sOJiIl5Vjd53uWX_syqy6lNWFkKGonPVreDNPrkCi_o/viewform"
    },
    bot: {
        title: "Хотите всегда иметь под рукой надежного помощника?",
        description: "Обратитесь к нам — мы создадим для вас не просто ассистента, а полноценного виртуального сотрудника, который будет работать без перебоев и выходных! Заполняйте бриф и мы свяжемся с вами уже сегодня !",
        briefLink: "https://docs.google.com/forms/d/1T0XMWAKDO7JgmAKF8x9FVtDK_OhX7hCrqYf2J6dEdIU/"
    },
    marketing: {
        title: "Надоел примитивный маркетинг ? ",
        description: "Мы возьмём на себя продвижение вашего бизнеса: настроим бюджет на рекламу, создадим качественный контент и обеспечим постоянный рост с помощью аналитики и оптимизации — заполняйте бриф, и мы свяжемся с вами!",
        briefLink: "https://forms.gle/d7ZTaMSw3s5tUYsT6"
    },
    website: {
        title: "Хотите обогнать конкурентов и иметь больше клиентов? Закажите сайт, который продаёт на автомате!",
        description: "Мы создадим для Вас известный онлайн-инструмент, который будет привлекать клиентов и заставит их покупать. Заполняйте бриф и начинаем уже сегодня!",
        briefLink: "https://docs.google.com/forms/d/e/1FAIpQLSeOfLkeHZS2lqGpedM9lTazmQ5Q3MJwuYxPCzhvaPfrxt6rSw/viewform?usp=header"
    },
    explainer: {
        title: "Как просто и эффективно объяснить? Создадим эксплейнеры, которые увлекают и обучают!",
        description: "Обращайтесь к нам — мы настроим таргетированную рекламу, которая работает на результат",
        briefLink: "https://docs.google.com/forms/d/1T0XMWAKDO7JgmAKF8x9FVtDK_OhX7hCrqYf2J6dEdIU/"
    },
    'get-course': {
        title: "Хотите  узнать как создать онлайн-курсы, которые меняют жизни?",
        description: "Мы разрабатаем GetCourse-платформу под ключ именно для вас: настроем  функционал, создадим удобный интерфейс и интегрируем необходимые инструменты для эффективного обучения и продаж — заполняйте бриф, и мы свяжемся с вами!",
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