// Ждем полной загрузки DOM дерева
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  // Добавляем обработчик клика на каждую кнопку вкладки
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      
      // 1. Убираем класс active у всех кнопок
      tabs.forEach((t) => t.classList.remove("active"));
      
      // 2. Скрываем все панели
      panels.forEach((p) => p.classList.remove("active"));

      // 3. Добавляем класс active нажатой кнопке
      tab.classList.add("active");

      // 4. Находим нужную панель по id и показываем её
      const targetId = tab.dataset.tab;
      const targetPanel = document.getElementById(targetId);
      
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
});