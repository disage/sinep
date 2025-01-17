<script setup>
</script>

<template>
    <section class="about-section">
        <div class="about-section_image"></div>
        <div class="about-section_info">
            <h2 class="about-section_info-title">Мы — команда<br> профессионалов <br> c общей целью: </h2>
            <div class="about-section_info-description">
                <div class="about-section_info-description-item">
                    <div class="vertical-divider"></div>
                    <span>Cоздавать веб-решения, которые делают ваш бизнес сильнее, заметнее и успешнее в мире, где цифровая трансформация становится не просто выбором, а необходимостью, Sinep становится вашим надёжным партнёром на пути к успеху !</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about-section {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 100vh;
    &_image {
        background-image: url(../../assets/images/about_us_image.png);
        background-repeat: no-repeat;
        background-size: contain;
        width: 45%;
    }
    &_info {
        width: 45%;
        &-title {
            font-size: 60px;
            font-weight: 500;
        }
        &-description-item {
            display: flex;
            margin-bottom: 30px;
            .vertical-divider {
                margin-right: 10px;
                display: flex;
                background: #1B1B1C;
                border-radius: 5px;
                box-shadow: 1px 1px 2px rgba(40, 40, 42, 0.3), -1px -1px 2px rgba(14, 14, 14, 0.5), inset -5px 5px 10px rgba(14, 14, 14, 0.2), inset 5px -5px 10px rgba(14, 14, 14, 0.2), inset -5px -5px 10px rgba(40, 40, 42, 0.9), inset 5px 5px 13px rgba(14, 14, 14, 0.9);
                height: auto;
                width: 7px;
            }
            span {
                width: 90%;
                font-size: 20px;
            }
        }
    }
}

@media screen and (max-width: 1440px) {
    .about-section {
        flex-wrap: wrap-reverse;
        &_image {
            width: 100%;
            height: 70vh;
            background-position: center;
        }
        &_info {
            width: 100%;
            &-title {
                font-size: 50px;
                word-wrap: break-word;
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .about-section {
        &_info {
            &-title {
                font-size: 40px;
            }
        }
    }
}

</style>
