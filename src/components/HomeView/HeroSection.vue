<script setup>
</script>

<template>
    <section class="hero-section">
        <div class="row">
            <div class="hero-section_info">
                <h1>Добро пожаловать в <br> SINEP Group !</h1>
                <span class="hero-section_info-description">Мы агентство, которое строит цифровое будущее бизнеса!</span>
                <div class="hero-section_statistics">
                    <div class="hero-section_statistics-item">
                        <img src="@/assets/images/projects_icon.png" alt="projects_icon">
                        <span class="hero-section_statistics-item-name">Ниш</span>
                        <span class="hero-section_statistics-item-count">80+</span>
                    </div>
                    <div class="hero-section_statistics-item">
                        <img src="@/assets/images/projects_icon.png" alt="projects_icon">
                        <span class="hero-section_statistics-item-name">Крупных проектов</span>
                        <span class="hero-section_statistics-item-count">12+</span>
                    </div>
                    <div class="hero-section_statistics-item">
                        <img src="@/assets/images/projects_icon.png" alt="projects_icon">
                        <span class="hero-section_statistics-item-name">Заработано клиентам</span>
                        <span class="hero-section_statistics-item-count">70к $</span>
                    </div>
                </div>
                <div class="hero-section_clients">
                    <div class="hero-section_clients-item"></div>
                    <div class="hero-section_clients-item"></div>
                    <div class="hero-section_clients-item"></div>
                    <div class="hero-section_clients-item"></div>
                    <div class="hero-section_clients-item"></div>
                    <div class="hero-section_clients-item"></div>
                </div>
            </div>
            <div class="hero-section_image"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero-section {
    box-sizing: border-box;
    min-height: 100vh;
    padding-top: 150px;
    h1 {
        color: #CAA153;
        font-size: 45px;
        font-weight: 500;
    }
    &_info {
        display: flex;
        flex-direction: column;
        width: 55%;
        &-description{
            margin-top: 20px;
            font-weight: 400;
            font-size: 25px;
        }
    }
    &_image {
        display: flex;
        width: 40%;
        justify-content: end;
        background-image: url(../../assets/images/hero_logo.png);
        background-size: contain;
        background-repeat: no-repeat;
    }
    &_clients {
        display: flex;
        margin-top: 100px;
        &-item {
            border-radius: 5px;
            margin-right: 30px;
            height: 100px;
            width: 100px;
            background-color: #CCC;
        }
    }
    &_statistics {
        margin-top: 100px;
        display: flex;
        &-item {
            display: flex;
            flex-direction: column;
            margin-right: 100px;
            img {
                width: 150px;
                margin: auto;
            }
            &-name {
                font-weight: 400;
                font-size: 20px;
                text-align: center;
            }
            &-count {
                text-align: center;
                color: #CAA153;
                margin-top: 10px;
                font-size: 35px;
            }
        }
    }
}
</style>
