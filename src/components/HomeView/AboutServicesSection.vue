<script setup>
</script>

<template>
    <section class="about-services-section">
        <h2 class="about-services-section_title">Что мы делаем?</h2>
        <span class="about-services-section_description">Мы предлагаем полный цикл услуг для развития вашего бизнеса в цифровой среде</span>
        <div class="services-list">
            <div class="services-list_item">
                <img src="../../assets/images/service_website.png" alt="service_website_img">
                <span class="services-list_item-name">Уникальные сайты</span>
                <span class="services-list_item-description">от визиток до сложных корпоративных порталов</span>
            </div>
            <div class="services-list_item">
                <img src="../../assets/images/service_marketing.png" alt="service_website_img">
                <span class="services-list_item-name">Цифровой маркетинг </span>
                <span class="services-list_item-description">привлекаем клиентов и увеличиваем продажи</span>
            </div>
            <div class="services-list_item">
                <img src="../../assets/images/service_design.png" alt="service_website_img">
                <span class="services-list_item-name">UX/UI-дизайн</span>
                <span class="services-list_item-description">создаём красивые и удобные интерфейсы</span>
            </div>
            <div class="services-list_item">
                <img src="../../assets/images/service_support.png" alt="service_website_img">
                <span class="services-list_item-name">Техническая поддержка и развитие </span>
                <span class="services-list_item-description">обеспечиваем стабильную работу и внедряем инновации</span>
            </div>
            <div class="services-list_item">
                <img src="../../assets/images/service_bots.png" alt="service_website_img">
                <span class="services-list_item-name">Разработка Viber и Telegram ботов</span>
                <span class="services-list_item-description">автоматизируем и улучшаем пользовательский опыт</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about-services-section {
    &_title {
        text-align: center;
    }
    &_description {
        display: block;
        text-align: center;
        font-size: 20px;
    }
    .services-list {
        background: #1B1B1C;
        border-radius: 15px;
        box-shadow: -5px 5px 10px rgba(14, 14, 14, 0.2), 5px -5px 10px rgba(14, 14, 14, 0.2), -5px -5px 10px rgba(41, 41, 42, 0.9), 5px 5px 13px rgba(14, 14, 14, 0.9), inset 1px 1px 2px rgba(41, 41, 42, 0.3), inset -1px -1px 2px rgba(14, 14, 14, 0.5);
        display: flex;
        flex-wrap: wrap;
        gap: 100px 30px;
        justify-content: center;
        margin: 50px auto;
        max-width: 1440px;
        padding: 50px;
        &_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
                max-width: 150px;
                margin-bottom: 30px;
            }
            &-name {
                font-weight: 500;
                font-size: 20px;
                margin-bottom: 10px;
            }
            &-description {
                text-align: center;
                font-weight: 300;
                max-width: 70%;
            }
        }
    }
}
</style>
