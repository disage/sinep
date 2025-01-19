  
<script setup>
    import EmailIcon from '@/assets/images/emailIcon.vue';
    import InstagramIcon from '@/assets/images/instagramIcon.vue';
    import TelegramIcon from '@/assets/images/telegramIcon.vue';
    import eventBus from '../helpers/eventBus';

    const scrollTo = (sectionName) => {
        eventBus.$emit('scroll-to-section', sectionName);
    }
</script>

<template>
    <footer>
        <div class="footer-column">
            <p>Мы помогаем нашим клиентам понять: цифровые услуги —  <br> это не только скорость и простота технологий.</p>
            <div class="footer-column_media">
                <EmailIcon/>
                <InstagramIcon/>
                <TelegramIcon/>
            </div>
        </div>
        <div class="footer-column">
            <ul>
                <li>Пользовательское соглашение</li>
                <li>Пример контракта</li>
            </ul>
        </div>
        <div class="footer-column">
            <ul class="footer-column_navigation">
                <li @click="scrollTo('heroSection')">Главная</li>
                <li @click="scrollTo('aboutSection')">О нас</li>
                <li @click="scrollTo('servicesSection')">Услуги</li>
                <li @click="scrollTo('casesSection')">Кейсы</li>
                <li @click="scrollTo('contactsSection')">Отзывы</li>
                <li @click="scrollTo('contactsSection')">Контакты</li>
            </ul>
        </div>
    </footer>
  </template>


<style lang="scss" scoped>

footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .footer-column {
        p {
            margin-top: 0;
        }
        ul {
            margin-top: 0;
            color: #EEEAE6;
            list-style: none;
            li {
                transition: 0.3s ease-in-out;
                margin-bottom: 10px;
                cursor: pointer;
                &:hover {
                    transform: translateX(-20px);
                    transition: 0.3s ease-in-out;
                }
            }
        }
        &_navigation {
            text-align: right;
        }
        &_media {
            margin-top: 50px;
            display: flex;
            gap: 20px;
            svg:hover {
                transition: 0.3s;
                cursor: pointer;
                path {
                    transition: 0.3s;
                    fill: #CAA153;
                }
            }
        }
    }
}

@media screen and (max-width: 1100px) {
    .footer-column {
        margin-bottom: 50px;
        width: 100%;
        ul {
            padding: 0;
            li {
                &:hover {
                    transform: translateX(20px)!important;
                }
            }
        }
        &_navigation {
            text-align: left!important;
        }
    }
}
</style>