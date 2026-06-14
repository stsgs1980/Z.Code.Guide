// Раздел 6: Режимы выполнения (Execution Modes)

export const executionModes = [
  {
    name: "Full Access / Auto Edit",
    desc: "Agent выполняет действия без постоянных подтверждений",
    when: "Для длинных задач, Goal Mode — минимум прерываний",
    color: "green",
    icon: "Zap",
  },
  {
    name: "По умолчанию",
    desc: "Опасные действия требуют подтверждения",
    when: "Для повседневной разработки",
    color: "blue",
    icon: "Shield",
  },
  {
    name: "Strict / Manual",
    desc: "Каждое действие требует подтверждения",
    when: "Для критических изменений",
    color: "red",
    icon: "Lock",
  },
];

export const modeSwitchTip = "Нажмите Shift+Tab (когда фокус в поле ввода чата) для циклического переключения режимов.";

export const modeCombinationTip = "Для длинных goal-driven задач комбинируйте Goal Mode с Full Access — это минимизирует прерывания и позволяет итерациям идти непрерывно.";