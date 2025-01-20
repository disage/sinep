<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = computed(() => route.params.slug);
const steps = ref({
    target: [
        { name: "Заполнение брифа", description: "Бриф — это основа успешной рекламной кампании. Этот первый шаг помогает нам понять вашу бизнес-стратегию, цели и ценности бренда. Мы собираем все ключевые данные: кто ваша целевая аудитория, какие задачи стоят перед вами, какой бюджет вы готовы выделить. Именно бриф задает правильный вектор, чтобы реклама была максимально эффективной и отражала ваши ожидания. " },
        { name: "Анализ", description: "На этом этапе мы глубоко погружаемся в ваше исследование в электрическом режиме. Мы анализируем поведение, интересы, предпочтения, возраст, пол, географию и другие важные параметры. Также мы опираемся на ваших конкуренты, чтобы понять, как выделиться на фоне их рекламных тенденций. Анализ помогает нам выбрать самые эффективные источники, инструменты и методы таргетинга." },
        { name: "Подготовка", description: "На этапе разработки мы строим кризис. Мы выбираем рекламные платформы, на которых будет размещаться ваша реклама, настраиваемого аналитика, создаем необходимые аккаунты и подготавливаем все материалы для старта. Это также этап, на котором мы согласовываем с вами все ключевые моменты, чтобы быть уверенными, что каждый этап соответствует вашим ожиданиям." },
        { name: "Разработка", description: "Теперь начинается процесс создания самой рекламы. Мы разрабатываем креативы, пишем тексты и создаем визуальные материалы, которые привлекают внимание вашего клиента. На этом этапе важно, чтобы рекламные материалы были не только красивыми, но и эффективно коммуницировали ценности вашего бренда, работая над достижением ваших целей. Это тот момент, когда идея обретает конкретную форму." },
        { name: "Наполнение", description: "Здесь мы размещаем готовую рекламу на выбранных платформах и настраиваемый таргетинг. Мы определяем, кто видит вашу рекламу, с какими интересами, в каком возрасте, в каких странах. Важно, чтобы каждый элемент рекламы точно попадал в вашу целевую аудиторию. Мы тщательно отслеживаем процесс и вносим корректировки, если это необходимо." },
        { name: "Финал", description: "Реклама активирована, и мы начинаем следить за ее эффектом. На реальном этапе мы анализируем эффективность кампании: на данный момент точно сработал таргетинг, какие креативы привели к наибольшему отклику, какие механизмы приводят к наилучшему результату. Мы готовим отчет, который позволит вам увидеть реальную отдачу от вложений. Но на этом мы не останавливаемся — кампанию можно улучшить и сохранить для достижения еще больших результатов в будущем." },
    ],
    marketing: [
        { name: "Заполнение брифа", description: "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave" }
    ]
});

</script>
<template>
    <section>
        <h2>Этапы разработки</h2>
        <div class="steps-container">
            <div class="steps-container_item" v-for="step in steps[slug]" :key="step.name">
                <div class="steps-container_item-info">
                    <h3 class="steps-container_item-name">{{ step.name }}</h3>
                    <p class="steps-container_item-description">{{ step.description }}</p>
                </div>
                <div class="steps-container_item-divider"></div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
h2 {
    text-align: center;
}

.steps-container {
    margin: 100px auto 0 auto;
    width: 50%;

    &_item {
        display: flex;
        text-align: right;
        width: 50%;
        margin-right: auto;

        .steps-container_item-info {
            margin-right: 50px;
        }

        &:nth-child(even) {
            margin: 50px 3.8px 50px auto;
            text-align: left;
            flex-direction: row-reverse;
            justify-content: end;

            .steps-container_item-info {
                margin-right: 0px;
                margin-left: 50px;
            }
        }

        &-divider {
            display: flex;
            height: auto;
            width: 50px;
            background: #1B1B1C;
            box-shadow: 1px 1px 2px rgba(40, 40, 42, 0.3), -1px -1px 2px rgba(14, 14, 14, 0.5), inset -5px 5px 10px rgba(14, 14, 14, 0.2), inset 5px -5px 10px rgba(14, 14, 14, 0.2), inset -5px -5px 10px rgba(40, 40, 42, 0.9), inset 5px 5px 13px rgba(14, 14, 14, 0.9);
            border-radius: 15px;
            //margin-left: 50px;
        }
    }
}</style>
