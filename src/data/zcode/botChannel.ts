// Раздел 15: Bot Channel — Feishu / WeChat / Telegram

export const remoteVsBot = [
  { feature: "Remote Control", desc: "Быстрый доступ через QR-код", detail: "Для временного подключения" },
  { feature: "Remote Control", desc: "Один телефон одновременно", detail: "— " },
  { feature: "Bot Channel", desc: "Точка входа живёт внутри чат-инструмента", detail: "Для длительного доступа из мессенджера" },
  { feature: "Bot Channel", desc: "Можно пересматривать переписку с ботом", detail: "— " },
];

export const availableChannels = [
  { name: "WeChat", desc: "Сканируйте для входа и автоматической привязки" },
  { name: "Feishu", desc: "Сканируйте для создания приложения, затем привяжите через сообщения" },
  { name: "Telegram", desc: "Создайте бота, затем привяжите через сообщения" },
  { name: "DingTalk", desc: "Будет добавлен в будущих версиях", upcoming: true },
  { name: "Discord", desc: "Будет добавлен в будущих версиях", upcoming: true },
  { name: "WeCom", desc: "Будет добавлен в будущих версиях", upcoming: true },
];

export const feishuBindingSteps = [
  { step: 1, action: "Выберите Feishu в ZCode" },
  { step: 2, action: "Отсканируйте QR-код — ZCode автоматически создаст приложение Feishu" },
  { step: 3, action: "ZCode сгенерирует код привязки (pairing code)" },
  { step: 4, action: "В разговоре Feishu отправьте /bind <pairing-code>" },
  { step: 5, action: "После подтверждения бот готов к использованию" },
];

export const botCapabilities = [
  "Проверка статуса задач",
  "Создание новых задач",
  "Переключение проектов",
  "Переключение моделей",
  "Изменение режима выполнения",
  "Настройка детальности ответов",
];

export const botManagementOptions = [
  { option: "Bind Bot", desc: "Привязка учётных данных" },
  { option: "Reply granularity", desc: "Контроль детальности ответов бота" },
  { option: "Workspace access scope", desc: "Ограничение доступных workspace" },
  { option: "Delete Bot", desc: "Удаление канала" },
];