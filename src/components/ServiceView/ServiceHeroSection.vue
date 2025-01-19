
<script setup>
import { computed } from 'vue';
import circleElement from '@/assets/images/circleElement.vue';
import circleElementLogo from '@/assets/images/circleElementLogo.vue';
import { useRoute } from 'vue-router';
import Button from '../Button.vue';

const route = useRoute();
const slug = computed(() => route.params.slug);

const titles = {
    'website': 'Разработка Веб-сайтов',
    'bot': 'Разработка ботов',
    'marketing': 'Маркетинговое сопровождение',
    'target': 'Настройка таргета',
    'explainer': 'Создание эксплейнеров',
    'get-course': 'Создание гет-курсов',
};
const descriptions = {
    'website': 'Мы предоставляем услуги по разработке всевозможных вебсайтов, от лендингов до полноценных платформ',
    'bot': 'Создаем чат-ботов, которые автоматизируют процессы, отвечают клиентам 24/7 и помогают ускорить обработку запросов.',
    'marketing': 'Комплексный подход для роста вашего бизнеса: анализ, стратегия, рекомендации и внедрение инструментов, которые помогут увеличить продажи и улучшить репутацию.',
    'target': 'Запускаем рекламные кампании в Instagram и Facebook. Наша задача — привлечь именно вашу целевую аудиторию, чтобы каждая вложенная копейка работала на результат.',
    'explainer': 'Создаем короткие видеоролики, которые просто и наглядно рассказывают о вашем продукте или услуге. Помогают завоевать внимание и доверие.',
    'get-course': 'Разрабатываем онлайн-курсы под ключ: от структуры и контента до интеграции на платформу. Это ваш путь к созданию образовательного продукта, который будет приносить прибыль.',
};

const title = computed(() => titles[slug.value] || 'Услуга не найдена');
const description = computed(() => descriptions[slug.value] || 'Услуга не найдена');
const scrollTo = (sectionName) => {
    const section = document.querySelector(`[data-section="${sectionName}"]`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <section class="hero-section">
        <div class="row">
            <div class="hero-section_info">
                <div class="hero-section_info-text">
                    <div>
                        <div class="overflow-hidden">
                            <h2>{{ title.split(' ')[0] }}</h2>
                        </div>
                        <div class="overflow-hidden">
                            <h2>{{ title.split(' ')[1] }}</h2>
                        </div>
                    </div>
                    <div class="overflow-hidden">
                        <span>{{ description }}</span>
                    </div>
                    <circleElement class="hello-circle" />
                </div>
                <div class="service-navigation">
                    <Button @click="scrollTo('typesSection')">Виды</Button>
                    <Button @click="scrollTo('stepsSection')">Этапы</Button>
                    <Button @click="scrollTo('casesSection')">Кейсы</Button>
                    <Button @click="scrollTo('briefSection')">Бриф</Button>
                </div>
            </div>
            <div class="hero-section_logo">
                <circleElementLogo />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero-section {
    z-index: 3;
    display: flex;
    box-sizing: border-box;
    height: 100vh;
    justify-content: space-between;
    padding-top: 150px;

    .row {
        width: 100%;
    }

    &_info {
        display: flex;
        justify-content: space-between;
        width: 45%;
        flex-direction: column;

        &-text {
            position: relative;
            z-index: 3;
            display: inline-block;

            span {
                font-size: 28px;
                color: #cccccc;
                font-weight: 200;
                display: flex;
                transform: translateX(-1000px);
                animation: popUpRight 0.5s forwards;
                animation-delay: 1.8s;
            }
        }
        .service-navigation {
            display: flex;
            gap: 20px;
            box-shadow: 1px 1px 2px rgba(35, 35, 36, 0.3), -1px -1px 2px rgba(19, 19, 20, 0.5), inset -5px 5px 10px rgba(19, 19, 20, 0.2), inset 5px -5px 10px rgba(19, 19, 20, 0.2), inset -5px -5px 10px rgba(35, 35, 36, 0.9), inset 5px 5px 13px rgba(19, 19, 20, 0.9);
            border-radius: 15px;
            padding: 20px;
            width: fit-content;
            margin-bottom: 100px;

        }
    }

    &_logo {
        display: flex;
        flex-direction: column;
        width: 45%;
        position: relative;
        z-index: 1;
    }

    .overflow-hidden {
        overflow: hidden;
    }

    h2 {
        word-wrap: break-word;
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        text-transform: uppercase;
        color: #EEEAE6;
        text-shadow: 5px 5px 15px #000000;
        animation: popUpTop 1s forwards;
        animation-delay: 1s;
        margin: 0;
        transform: translateY(130px);
    }
}

@keyframes popUpTop {
    0% {
        transform: translateY(130px);
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes popUpRight {
    0% {
        transform: translateX(-1000px);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}



.hello-circle {
    position: absolute;
    top: -30vh;
    left: -40%;
    z-index: -1;
    width: 100%;
}

.logo-circle {
    position: absolute;
    width: 100%;
    z-index: -2;
}


@media screen and (min-width: 900px) and (max-width: 1440px) {

    .hero-section_info {
        width: 60%;

        .hero-section_info-text {
            h2 {
                font-size: 47px !important;
            }

            span {
                font-size: 22px;
            }
        }
    }

    .hero-section_logo {
        width: 40%;
    }
}

@media screen and (max-width: 900px) {
    h2 {
        font-size: 47px !important;
    }

    span {
        font-size: 21px !important;
    }

    .hero-section_info {
        width: 90%;
    }

    .hero-section_logo {
        width: 10%;
    }
}


@media screen and (max-width: 620px) {
    h2 {
        font-size: 38px !important;
    }

    span {
        font-size: 16px !important;
    }

    .hero-section_info {
        width: 100%;
    }

    .hero-section_logo {
        display: none;
    }
}
</style>
