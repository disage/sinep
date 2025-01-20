
<script setup>
import circleElement from '@/assets/images/circleElement.vue';
import circleElementLogo from '@/assets/images/circleElementLogo.vue';

</script>

<template>
    <section class="hero-section">
        <div class="row">
            <div class="hero-section_info">
                <div class="hero-section_info-text">
                    <div>
                        <div class="overflow-hidden">
                            <h2>ПРИВЕТСТВУЕМ</h2>
                        </div>
                        <div class="overflow-hidden">
                            <h2>В SINEP GROUP !</h2>
                        </div>
                    </div>
                    <div class="overflow-hidden">
                        <span>Мы агентство, которое строит цифровое <br>будущее вашего бизнеса!</span>
                    </div>
                    <circleElement class="hello-circle" />
                </div>
                <div class="hero-section_info-stats">
                    <div>
                        <span class="hero-section_info-stats-value">150k $</span>
                        <span class="hero-section_info-stats-value">12+</span>
                        <span class="hero-section_info-stats-value">80+</span>
                    </div>
                    <div>
                        <span class="hero-section_info-stats-name">Заработано клиентам</span>
                        <span class="hero-section_info-stats-name">Крупных проектов</span>
                        <span class="hero-section_info-stats-name">Охваченных ниш</span>
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
                animation-delay: 1.8s;
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
                margin-bottom: 10px;
                margin-right: 50px;
                color: #CAA153;
                font-weight: 600;
                animation: fadeIn 0.5s forwards;

                &:nth-of-type(1) {
                    animation-delay: 2s;
                }

                &:nth-of-type(2) {
                    animation-delay: 2.2s;
                }

                &:nth-of-type(3) {
                    animation-delay: 2.4s;
                }
            }

            &-name {
                opacity: 0;
                margin-bottom: 10px;
                font-weight: 300;
                color: #cccccc;
                animation: fadeIn 0.5s forwards;

                &:nth-of-type(1) {
                    animation-delay: 2s;
                }

                &:nth-of-type(2) {
                    animation-delay: 2.2s;
                }

                &:nth-of-type(3) {
                    animation-delay: 2.4s;
                }
            }
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
        font-size: 65px;
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
                font-size: 50px !important;
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
        font-size: 50px !important;
    }

    span {
        margin-top: 10px;
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
}</style>
