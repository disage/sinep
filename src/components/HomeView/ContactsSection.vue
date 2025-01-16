<script setup>
import { ref } from 'vue';

    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const message = ref('');

    const handleSubmit = () => {
        console.log('Форма отправлена', { name: name.value, email: email.value, phone: phone.value, message: message.value });
        // Здесь можно добавить логику отправки данных на сервер
    };
</script>
<template>
    <section class="contacts-section">
        <div class="contacts-section_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.34337025944!2d44.51464137662055!3d40.179171271478864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfa95278d7d%3A0x2c9e39486cb86784!2s8%2C%202%20Vardanants%20St%2C%20Yerevan%200010%2C%20Armenia!5e0!3m2!1sen!2sde!4v1736701564994!5m2!1sen!2sde" 
                height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <h2>Свяжитесь с нами сегодня !</h2>
            <p>Планируете новый проект? Нужна помощь с текущим? Напишите нам о потребностях вашего проекта, и мы ответим в тот же день</p>
            <div class="contacts-section_icons">
                <div class="contacts-section_icons-item">
                    <img src="@/assets/images/projects_icon.png" alt="projects_icon">
                    <span class="contacts-section_icons-item-name">Адресс</span>
                    <span class="contacts-section_icons-item-count">г. Ереван 2-й переулок улицы Вардананц, 8</span>
                </div>
                <div class="contacts-section_icons-item">
                    <img src="@/assets/images/projects_icon.png" alt="projects_icon">
                    <span class="contacts-section_icons-item-name">Телефон</span>
                    <span class="contacts-section_icons-item-count">+49123456123178</span>
                </div>
                <div class="contacts-section_icons-item">
                    <img src="@/assets/images/projects_icon.png" alt="projects_icon">
                    <span class="contacts-section_icons-item-name">Email</span>
                    <span class="contacts-section_icons-item-count">example@company.com</span>
                </div>
            </div>
            <div class="form-container">
                <form @submit.prevent="handleSubmit">
                  <div class="form-field">
                    <input v-model="name" type="text" placeholder="Имя" />
                  </div>
                  <div class="form-field">
                    <input v-model="email" type="email" placeholder="E-mail" />
                  </div>
                  <div class="form-field">
                    <input v-model="phone" type="tel" placeholder="Телефон" />
                  </div>
                  <div class="form-field">
                    <textarea v-model="message" placeholder="Сообщение"></textarea>
                  </div>
                  <div class="form-button">
                    <button type="submit">Отправить</button>
                  </div>
                </form>
            </div>
    </section>
</template>

<style lang="scss" scoped>
.contacts-section {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100vh;
    box-shadow: -5px 5px 10px rgba(19, 19, 20, 0.2), 5px -5px 10px rgba(19, 19, 20, 0.2), -5px -5px 10px rgba(35, 35, 36, 0.9), 5px 5px 13px rgba(19, 19, 20, 0.9), inset 1px 1px 2px rgba(35, 35, 36, 0.3), inset -1px -1px 2px rgba(19, 19, 20, 0.5);
    border-radius: 15px;
    &_map {
        margin: 50px auto;
        width: 60%;
        height: 300px;
        box-shadow: 1px 1px 2px rgba(35, 35, 36, 0.3), -1px -1px 2px rgba(19, 19, 20, 0.5), inset -5px 5px 10px rgba(19, 19, 20, 0.2), inset 5px -5px 10px rgba(19, 19, 20, 0.2), inset -5px -5px 10px rgba(35, 35, 36, 0.9), inset 5px 5px 13px rgba(19, 19, 20, 0.9);
        border-radius: 15px;
        padding: 20px;
        iframe {
            border-radius: 15px;
            width: 100%;
            height: 100%;
            opacity: 0.8;
            border: 0;
            filter: grayscale(100%);
        }
    }
    h2 { 
        text-align: center;
    }
    p {
        text-align: center;
        width: 50%;
        margin: auto;
        font-size: 20px;
    }
    &_icons {
        margin: 100px auto;
        display: flex;
        gap: 50px;
        &-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 30%;
            text-align: center;
            img {
                width: 140px;
            }
            &-name {
                font-size: 20px;
                margin: 10px 0;
            }
        }
    }
    $form-bg-color: #1B1B1C;
    $shadow-color: rgba(0, 0, 0, 0.5);

    .form-container {
        background-color: $form-bg-color;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #EEEAE6;

        form {
            background-color: $form-bg-color;
            padding: 20px;
            border-radius: 12px;
            width: 100%;
            max-width: 40%;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-field {
            position: relative;

            input,
            textarea {
            width: 100%;
            padding: 20px;
            border-radius: 8px;
            border: none;
            background-color: $form-bg-color;
            color: #EEEAE6;
            font-size: 16px;
            outline: none;
            transition: box-shadow 0.3s ease;
            box-shadow: 1px 1px 2px rgba(35, 35, 36, 0.3), -1px -1px 2px rgba(19, 19, 20, 0.5), inset -5px 5px 10px rgba(19, 19, 20, 0.2), inset 5px -5px 10px rgba(19, 19, 20, 0.2), inset -5px -5px 10px rgba(35, 35, 36, 0.9), inset 5px 5px 13px rgba(19, 19, 20, 0.9);

                &::placeholder {
                    color: #C4C1BE;
                }

                &:focus {
                    box-shadow: inset 6px 6px 12px $shadow-color, inset -6px -6px 12px lighten($form-bg-color, 10%);
                }
            }

            textarea {
            resize: none;
            height: 100px;
            }
        }

        .form-button {
            display: flex;
            justify-content: center;

                button {
                padding: 12px 24px;
                border-radius: 8px;
                border: none;
                background-color: $form-bg-color;
                box-shadow: 6px 6px 12px $shadow-color, -6px -6px 12px lighten($form-bg-color, 10%);
                color: #EEEAE6;
                font-size: 16px;
                cursor: pointer;
                margin-top: 20px;
                margin-bottom: 50px;
                transition: box-shadow 0.3s ease;

                &:hover {
                    box-shadow: 6px 6px 20px $shadow-color, -6px -6px 20px lighten($form-bg-color, 10%);
                }

                &:active {
                    box-shadow: inset 6px 6px 12px $shadow-color, inset -6px -6px 12px lighten($form-bg-color, 10%);
                }
            }
        }
    }
}
</style>
