
<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import circleElement from '@/assets/images/circleElement.vue';
import circleElementLogo from '@/assets/images/circleElementLogo.vue';
import cases from '@/constants/cases-data'

const route = useRoute();
const slug = computed(() => route.params.slug);
const casesList = ref(cases);
const filterNames = ref({
      website: "разработка веб-сайта",
      target: "таргет",
      marketing: "маркетинг",
      bot: "разработка бота"
    });
const currentCase = computed(() =>
    casesList.value.find(caseItem => caseItem.id === slug.value) || null
);
</script>

<template>
    <section class="hero-section">
        <div class="row">
            <div class="hero-section_info">
                <div class="hero-section_info-text">
                    <div>
                        <div class="overflow-hidden">
                            <h2>{{ currentCase.name }}</h2>
                        </div>
                    </div>
                    <div class="overflow-hidden">
                        <span>{{ currentCase.description }}</span>
                    </div>
                    <circleElement class="hello-circle" />
                </div>
                <div class="hero-section_info-stats">
                    <div>
                        <span class="hero-section_info-stats-value">Услуга:</span>
                        <span v-for="(item, index) in currentCase.statistic" :key="index"
                            class="hero-section_info-stats-value">{{ item.name }}</span>
                    </div>
                    <div>
                        <span class="hero-section_info-stats-name">{{ filterNames[currentCase.service] }}</span>
                        <span v-for="(item, index) in currentCase.statistic" :key="index"
                            class="hero-section_info-stats-name">{{ item.value }}</span>
                    </div>
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
                animation-delay: 0.8s;
            }
        }

        &-stats {
            z-index: 3;
            display: flex;
            flex-direction: row;
            margin-bottom: 100px;
            font-size: 20px;

            div {
                display: flex;
                flex-direction: column;
            }

            &-value {
                opacity: 0;
                color: #cccccc;
                margin-bottom: 10px;
                margin-right: 50px;
                font-weight: 500;
                animation: fadeIn 0.5s forwards;

                &:nth-of-type(1) {
                    animation-delay: 1s;
                }

                &:nth-of-type(2) {
                    animation-delay: 1.2s;
                }

                &:nth-of-type(3) {
                    animation-delay: 1.4s;
                }

                &:nth-of-type(4) {
                    animation-delay: 1.6s;
                }

                &:nth-of-type(5) {
                    animation-delay: 1.8s;
                }
            }

            &-name {
                opacity: 0;
                margin-bottom: 10px;
                font-weight: 300;
                color: #CAA153;
                animation: fadeIn 0.5s forwards;

                &:nth-of-type(1) {
                    animation-delay: 1s;
                }

                &:nth-of-type(2) {
                    animation-delay: 1.2s;
                }

                &:nth-of-type(3) {
                    animation-delay: 1.4s;
                }

                &:nth-of-type(4) {
                    animation-delay: 1.6s;
                }

                &:nth-of-type(5) {
                    animation-delay: 1.8s;
                }
            }
        }

        .service-navigation {
            display: flex;
            gap: 20px;
            background-color: #1B1B1C;
            box-shadow: 1px 1px 2px rgba(35, 35, 36, 0.3), -1px -1px 2px rgba(19, 19, 20, 0.5), inset -5px 5px 10px rgba(19, 19, 20, 0.2), inset 5px -5px 10px rgba(19, 19, 20, 0.2), inset -5px -5px 10px rgba(35, 35, 36, 0.9), inset 5px 5px 13px rgba(19, 19, 20, 0.9);
            border-radius: 15px;
            padding: 20px;
            width: fit-content;
            margin-bottom: 100px;
            flex-wrap: wrap;
            z-index: 3;
            opacity: 0;
            animation: fadeIn 0.5s forwards;
            animation-delay: 2.4s;
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
        font-size: 55px;
        text-transform: uppercase;
        color: #EEEAE6;
        text-shadow: 5px 5px 15px #000000;
        animation: popUpTop 1s forwards;
        /*animation-delay: 1s;*/
        margin: 0;
        transform: translateY(200px);
    }
}

@keyframes popUpTop {
    0% {
        transform: translateY(200px);
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
        font-size: 32px !important;
    }

    span {
        margin-top: 10px;
        font-size: 15px !important;
    }

    .hero-section_info {
        width: 100%;
    }

    .hero-section_logo {
        display: none;
    }

    .service-navigation {
        margin-bottom: 150px !important;

        .neumorphic-button {
            width: 100%;
        }
    }
}

@media screen and (max-width: 400px) {
    h2 {
        font-size: 28px !important;
    }
}</style>
