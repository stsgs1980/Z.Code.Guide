// Раздел 16: Настройка интерфейса

export const themeOptions = [
  { name: "Светлая", desc: "Light — для работы при ярком освещении" },
  { name: "Тёмная", desc: "Dark — для работы в тёмной среде" },
  { name: "Переключение", desc: "Настройки -> Appearance — в один клик" },
];

export const chatRenderingModes = [
  {
    name: "Streaming",
    desc: "Ответ Agent появляется посимвольно в реальном времени",
    when: "Для обычной работы",
  },
  {
    name: "Performance mode",
    desc: "Упрощённый рендеринг",
    when: "Для слабых устройств",
  },
  {
    name: "Reasoning display",
    desc: "Показать/скрыть «мысли» Agent",
    when: "Для отладки и понимания логики",
  },
];

export const taskGroupingFeatures = [
  { feature: "Drag-to-collapse", desc: "Сворачивание перетаскиванием" },
  { feature: "Cross-group migration", desc: "Перенос между группами" },
  { feature: "Batch management", desc: "Пакетные действия над задачами" },
  { feature: "Date grouping", desc: "Задачи группируются по дате в боковой панели" },
];