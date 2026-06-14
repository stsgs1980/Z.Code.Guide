// Раздел 25: Краткая шпаргалка

export interface CheatGroup {
  title: string;
  items: { cmd: string; desc: string }[];
}

export const cheatGroups: CheatGroup[] = [
  {
    title: "ЗАПУСК",
    items: [
      { cmd: "zcode.z.ai", desc: "Скачайте ZCode" },
      { cmd: "GLM Start Plan", desc: "5 дней бесплатно" },
      { cmd: "Cmd+N / Ctrl+N", desc: "Новая задача" },
    ],
  },
  {
    title: "РАБОТА С AGENT",
    items: [
      { cmd: "Опишите задачу", desc: "Agent работает" },
      { cmd: "/goal <objective>", desc: "Режим целей для сложных задач" },
      { cmd: "/compact", desc: "Сжать контекст" },
      { cmd: "Shift+Tab", desc: "Переключить режим выполнения" },
      { cmd: "@subagent", desc: "Делегировать подагенту" },
      { cmd: "$skill-name", desc: "Использовать навык" },
      { cmd: "/command-name", desc: "Вызвать команду" },
    ],
  },
  {
    title: "НАСТРОЙКА",
    items: [
      { cmd: "Settings -> Models", desc: "Подключить провайдера" },
      { cmd: "Settings -> Skills", desc: "Управление навыками" },
      { cmd: "Settings -> Commands", desc: "Управление командами" },
      { cmd: "Settings -> Plugins", desc: "Управление плагинами" },
      { cmd: "Settings -> MCP Servers", desc: "Подключить внешние инструменты" },
    ],
  },
  {
    title: "МОБИЛЬНОСТЬ",
    items: [
      { cmd: "Иконка телефона", desc: "QR-код для Remote Control" },
      { cmd: "Bots -> Create Bot", desc: "Feishu / WeChat / Telegram" },
    ],
  },
  {
    title: "CLI-ИНСТРУМЕНТЫ",
    items: [
      { cmd: "chelper / coding-helper", desc: "Управление CLI-инструментами + GLM Plan" },
      { cmd: "coding-helper doctor", desc: "Диагностика конфигурации" },
      { cmd: "npx @z_ai/coding-helper", desc: "Запуск без глобальной установки" },
    ],
  },
  {
    title: "МОНИТОРИНГ",
    items: [
      { cmd: "Usage Stats", desc: "Квота, токены, прогресс" },
      { cmd: "Review-панель", desc: "Git diff и изменения" },
      { cmd: "Goal-карточка", desc: "Статус цели, итерации, время" },
    ],
  },
  {
    title: "ОБРАТНАЯ СВЯЗЬ",
    items: [
      { cmd: "Аватар -> Feedback", desc: "Встроенная форма" },
      { cmd: "Баннер ошибки", desc: "Отправить с контекстом" },
      { cmd: "GitHub Issues", desc: "zcode-feedback" },
    ],
  },
];