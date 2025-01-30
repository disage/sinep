const cases = [
    {
        id: "1",
        service: "target",
        name: "Продвижение премиум мебели",
        description: "Наш клиент занимается созданием эксклюзивной мебели на заказ. Главной целью было привлечь релевантную аудиторию и увеличить доход за счет таргетированной рекламы.",
        images: [
            new URL('@/assets/images/case_TI.png', import.meta.url).href,
            new URL('@/assets/images/case_TI.png', import.meta.url).href
        ],
        statistic: [
            { name: "Продолжительность кампаний:", value: "6 месяцев" },
            { name: "Бюджет:", value: "1807$" },
            { name: "Доход:", value: "26 000$+" },
            { name: "Средний чек:", value: "900-1000$" },
        ],
        info: [
            { title: "Про клиента", content: "Мы знаем, что каждый бизнес уникален, поэтому создаём решения, которые полностью соответствуют вашим задачам и целям." },
            { title: "Цели", content: "Мы знаем, что каждый бизнес уникален, поэтому создаём решения, которые полностью соответствуют вашим задачам и целям." },
            { title: "Оптимизация рекламных кампаний", content: "Мы знаем, что каждый бизнес уникален, поэтому создаём решения, которые полностью соответствуют вашим задачам и целям." },
            { title: "Секрет успеха", content: "Мы знаем, что каждый бизнес уникален, поэтому создаём решения, которые полностью соответствуют вашим задачам и целям." },
        ]
    },
    {
        id: "2",
        service: "website",
        name: "TalentInsight",
        description: "Платформа для коачинг компании",
        images: [
            new URL('@/assets/images/case_TI.png', import.meta.url).href,
            new URL('@/assets/images/case_TI.png', import.meta.url).href
        ],
        statistic: [
            { name: "Время разработки:", value: "3 месяца" },
            { name: "Платформа:", value: "Wordpress" },
            { name: "Год проекта:", value: "2023" }
        ],
        info: [
            { title: "Про клиента", content: "" },
            { title: "Цели", content: "" },
            { title: "Проделаная работа", content: "" },
            { title: "Результат", content: "" }
        ]
    },
]

export default cases;