// Раздел 3: API Key Setup — подключение моделей

export const providerTypes = [
  {
    name: "BigModel",
    desc: "Аккаунт Zhipu — для Китая. Поддержка GLM Coding Plan, ресурсные пакеты, предоплата",
    recommended: "Для пользователей из Китая",
  },
  {
    name: "Z.AI",
    desc: "Для международных пользователей. USD-ценообразование, бесплатная дневная квота",
    recommended: "Для международных пользователей",
  },
  {
    name: "Сторонние провайдеры",
    desc: "Любой сервис, совместимый с протоколами Anthropic / OpenAI",
    recommended: null,
  },
];

export const setupEntryPoints = [
  {
    method: "Экран приветствия",
    desc: "При первом открытии ZCode (если нет подключённых моделей) предложит: Continue with Z.ai, Continue with BigModel или Use API key",
  },
  {
    method: "Селектор моделей",
    desc: "Кликните на имя модели в поле чата → Manage Models → Settings → Model Settings",
  },
];

export const bigModelSteps = [
  { step: 1, action: "Откройте панель Model Settings" },
  { step: 2, action: "Выберите BigModel из списка провайдеров слева" },
  { step: 3, action: "Подключите аккаунт и включите переключатель" },
  { step: 4, action: "Используйте переключатель для выбора режима: Coding Plan или API Key" },
];

export const bigModelApiInfo = {
  baseUrl: "https://open.bigmodel.cn/api/anthropic",
  models: "GLM-5.2, GLM-5-Turbo, GLM-5V-Turbo",
  trialNote:
    "Новые пользователи получают trial-план сразу при подключении — без оплаты, с бесплатной дневной квотой для флагманских GLM-моделей.",
  plans: "GLM Coding (Lite / Pro / Max) с ежемесячной, квартальной и годовой оплатой",
};

export const zaiInfo = {
  baseUrl: "https://api.z.ai/api/anthropic",
  setupSteps: [
    "Откройте панель Model Settings",
    "Выберите Z.ai из списка провайдеров",
    "Подключите аккаунт и включите переключатель",
    "Переключатель Coding Plan / API Key в правом верхнем углу",
  ],
};

export const thirdPartyProviders = [
  { provider: "Anthropic (Claude)", baseUrl: "https://api.anthropic.com", models: "claude-fable-5, claude-opus-4-8, claude-sonnet-4-6, claude-haiku-4-5" },
  { provider: "OpenRouter", baseUrl: "https://openrouter.ai/api", models: "Любые модели OpenRouter" },
  { provider: "Moonshot", baseUrl: "https://api.moonshot.cn/anthropic", models: "kimi-k2.6 и другие" },
  { provider: "OpenAI", baseUrl: "https://api.openai.com", models: "gpt-5.5, gpt-5.5-pro, gpt-5.4-mini" },
  { provider: "MiniMax", baseUrl: "https://api.minimaxi.com/anthropic", models: "MiniMax-M3, MiniMax-M2.5" },
  { provider: "Xiaomi MiMo", baseUrl: "https://api.xiaomimimo.com/v1", models: "MiMo-V2.5-Pro, MiMo-V2.5" },
  { provider: "DeepSeek", baseUrl: "https://api.deepseek.com/anthropic", models: "deepseek-v4-pro, deepseek-v4-flash" },
  { provider: "Кастомный", baseUrl: "Любой Anthropic/OpenAI-совместимый URL", models: "Автообнаружение моделей" },
];

export const thirdPartySetupSteps = [
  { step: 1, action: "Откройте Model Settings" },
  { step: 2, action: "Нажмите Add Provider внизу списка слева" },
  { step: 3, action: "Введите имя провайдера" },
  { step: 4, action: "Выберите vendor Base URL или введите вручную" },
  { step: 5, action: "Введите API-ключ" },
  { step: 6, action: "Система автоматически загрузит список моделей" },
  { step: 7, action: "Включите переключатель — готово" },
];