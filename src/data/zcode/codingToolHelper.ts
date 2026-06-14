// Раздел 21: Coding Tool Helper — управление CLI-инструментами

export const cthDescription = {
  summary:
    "Консольный помощник для централизованного управления и настройки CLI-инструментов разработки: Claude Code, OpenCode, Crush и Factory Droid.",
  details:
    "Установите и запустите, следуйте экранным инструкциям — и он автоматически установит инструменты, настроит план и управит MCP-серверами.",
  npmPackage: "@z_ai/coding-helper",
  requirement: "Node.js >= v18.0.0",
};

export const supportedTools = [
  { tool: "Claude Code", desc: "CLI-агент от Anthropic" },
  { tool: "OpenCode", desc: "Открытый CLI-инструмент для кодирования" },
  { tool: "Crush", desc: "CLI-агент для разработки" },
  { tool: "Factory Droid", desc: "Инструмент автоматизации разработки" },
];

export const cthCapabilities = [
  { title: "Интерактивный мастер", desc: "Пошаговая настройка с дружественным интерфейсом" },
  { title: "Интеграция плана", desc: "Подключение GLM Coding Plan к выбранному CLI-инструменту" },
  { title: "Управление инструментами", desc: "Автоматическое обнаружение, установка и конфигурация" },
  { title: "Конфигурация MCP", desc: "Управление MCP-сервисами" },
  { title: "Локальное хранение", desc: "Безопасное локальное сохранение настроек" },
  { title: "I18n", desc: "Поддержка нескольких языков интерфейса" },
];

export const quickStartSteps = [
  {
    phase: "Шаг 1 — API Key",
    desc: "Посетите Z.AI Open Platform (z.ai) для получения API-ключа",
  },
  {
    phase: "Шаг 2a — npx (рекомендуется)",
    desc: "npx @z_ai/coding-helper — разовый запуск без глобальной установки",
  },
  {
    phase: "Шаг 2b — Глобальная установка",
    desc: "npm install -g @z_ai/coding-helper, затем chelper для запуска",
  },
  {
    phase: "Шаг 3 — Мастер настройки",
    desc: "Язык → План → API Key → Инструменты → Установка → Загрузка плана → MCP → Готово",
  },
];

export const cthCommands = [
  { cmd: "coding-helper init", desc: "Запуск мастера инициализации" },
  { cmd: "coding-helper lang show", desc: "Показать текущий язык" },
  { cmd: "coding-helper lang set en_US", desc: "Переключить на английский" },
  { cmd: "coding-helper auth", desc: "Настроить ключ интерактивно" },
  { cmd: "coding-helper auth glm_coding_plan_global <token>", desc: "Выбрать Global-план и задать ключ" },
  { cmd: "coding-helper auth revoke", desc: "Удалить сохранённый ключ" },
  { cmd: "coding-helper auth reload claude", desc: "Загрузить последний план в Claude Code" },
  { cmd: "coding-helper doctor", desc: "Диагностика конфигурации и статуса инструментов" },
  { cmd: "coding-helper --help", desc: "Справка" },
  { cmd: "coding-helper --version", desc: "Версия" },
];

export const troubleshooting = [
  {
    problem: "Сетевая ошибка (Network Error)",
    solution: "Проверьте подключение к сети или настройте прокси. Node.js не использует системный прокси автоматически — установите HTTP_PROXY и HTTPS_PROXY",
  },
  {
    problem: "Таймаут сети",
    solution: "Проверьте сетевое подключение или настройте прокси",
  },
  {
    problem: "Недостаточно прав (EACCES)",
    solution: "sudo (macOS/Linux), терминал от имени администратора (Windows), или npx вместо глобальной установки, или nvm",
  },
  {
    problem: "Некорректный статус плагина в Claude Code",
    solution: "Запустите claude update для обновления до версии 2.0.70 или новее",
  },
  {
    problem: "Недействительный API Key",
    solution: "Проверьте корректность ключа и достаточный баланс на аккаунте",
  },
  {
    problem: "Таймаут подключения",
    solution: "Проверьте сеть, брандмауэр и готовность Node.js окружения",
  },
];