// Раздел 5: Работа с ZCode Agent — базовый рабочий процесс

export const simpleTaskSteps = [
  { step: 1, action: "Откройте чат: Cmd+N (Mac) / Ctrl+N (Win) — New Task" },
  { step: 2, action: "Напишите инструкцию на естественном языке" },
  { step: 3, action: "Agent автоматически: исследует проект, создаст файлы, напишет код, запустит проверки" },
  { step: 4, action: "Следите за прогрессом в реальном времени" },
];

export const agentWorkflowSteps = [
  { phase: "Exploring", icon: "Search", desc: "Agent исследует проект: ищет файлы, читает структуру" },
  { phase: "Planning", icon: "ListTodo", desc: "Составляет план: какие файлы создать/изменить" },
  { phase: "Writing", icon: "Pencil", desc: "Пишет код, создаёт файлы" },
  { phase: "Running", icon: "Play", desc: "Выполняет команды в терминале (npm install, npm test и т.д.)" },
  { phase: "Verifying", icon: "CheckCircle", desc: "Проверяет результат: запускает тесты, линтер" },
  { phase: "Reviewing", icon: "GitCompare", desc: "Показывает финальные изменения: +N строк, -M строк" },
];

export const promptElements = [
  { element: "Goal", desc: "Что нужно построить или изменить", example: "«Исправь баг авторизации»" },
  { element: "Context", desc: "Релевантные файлы, ошибки, документация", example: "«Файл auth.ts, строка 42, ошибка E401»" },
  { element: "Constraints", desc: "Ограничения: стандарты, архитектура, зависимости", example: "«Используй JWT, не меняй схему БД»" },
  { element: "Done when", desc: "Критерий завершения", example: "«Тесты auth.test.ts проходят»" },
];

export const promptExamples = {
  good: "«Исправь баг авторизации в auth.ts (строка 42, ошибка E401). Используй JWT, не меняй схему БД. Готово, когда auth.test.ts проходит.»",
  bad: "«Почини авторизацию»",
};