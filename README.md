# Веб-приложение GameBase

### Описание проекта

Приложение для показа игр [Free-To-Play Games](https://www.freetogame.com/), созданное в рамках тестового задания для отбора на стажировку в Авито

---

### Использованные технологии

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

### Главная страница

- Показывает игры, которые:
  - можно отфильтровать по платформе и жанру
  - можно отсортировать по дате релиза, популярности и тд
- Каждая игра в списке содержит:
  - название
  - дату релиза (в российском формате)
  - издателя
  - жанр
  - постер
- При клике на игру происходит переход на страницу игры
- Во время загрузки игр показывается индикатор загрузки
- Если не удалось получить данные, пользователю сообщается об ошибке

### Страница игры

- Содержит:
  - название
  - дату релиза (в российском формате)
  - издатель
  - разработчик
  - жанр
  - постер
  - карусель скриншотов
  - системные требования
- На странице присутствует кнопка для возврата к списку игр
- Во время загрузки игр показывается индикатор загрузки
- Если не удалось получить данные, пользователю сообщается об ошибке

### Опциональные задания

- Использован TypeScript
- Учитывается, что список игр может содержать тысячи тайтлов - для этого присутствует пагинация
- При неудачном запросе пользователь имеет возможность совершить три попытки повторного запроса

---

Ссылка на проект: https://gamebase-app.vercel.app/

---

### Основные команды

- Для установки зависимостей: `npm ci`
- Для запуска проекта: `npm start`
