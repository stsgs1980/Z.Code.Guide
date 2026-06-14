// Раздел 2: Установка и первый запуск

export const downloadInfo = {
  siteUrl: "https://zcode.z.ai",
  currentVersion: "3.0.1",
  platforms: [
    { platform: "macOS (Apple Silicon)", format: ".dmg — основная загрузка" },
    { platform: "macOS (Intel)", format: ".dmg — отдельная ссылка" },
    { platform: "Windows", format: "установщик .exe" },
    { platform: "Linux", format: "пакет для вашего дистрибутива" },
  ],
};

export const installSteps: Record<string, { step: number; action: string }[]> = {
  windows: [
    { step: 1, action: "Скачайте установщик" },
    { step: 2, action: "Дважды кликните на него" },
    { step: 3, action: "Следуйте указаниям мастера установки" },
  ],
  macos: [
    { step: 1, action: "Откройте скачанный .dmg-файл" },
    { step: 2, action: "Перетащите ZCode.app в папку Applications" },
    { step: 3, action: "Запустите из Launchpad" },
  ],
  linux: [
    { step: 1, action: "Скачайте пакет для вашего дистрибутива" },
    { step: 2, action: "Установите стандартным способом для вашей системы" },
  ],
};

export const verificationTip =
  "Откройте приложение и выполните вход (sign-in) — после этого можно начинать работу.";