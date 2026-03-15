# HSEVibeHack

Чат-бот для подбора хакатонов по критериям (время, месяц, онлайн/офлайн). Пользователь вводит запрос в чат, получает подборку хакатонов и может добавить выбранный в календарь (Google Calendar и др.).

Для HSE Vibe Hack.

## Фронтенд

Интерфейс на React (Vite): двухколоночный layout (чат слева, профиль справа), тёмная тема, футер HSE HACK CLUB.

### Запуск

```bash
cd frontend
npm install
npm run dev
```

Сборка: `npm run build`. Превью продакшн-сборки: `npm run preview`.

### Демо

На демонстрации данные о хакатонах берутся из готовой базы (мок в `frontend/src/data/hackathons.js`). В дальнейшем можно подключить бэкенд с парсером хакатонов — слой в `frontend/src/services/chat.js` легко заменить на вызов API.

### Структура фронта

- `src/components/` — Layout, ChatHeader, ChatWelcome, ChatMessages, ChatInput, HackathonCard, UserProfilePanel, Footer
- `src/data/hackathons.js` — мок-база хакатонов
- `src/services/chat.js` — логика ответов бота (фильтрация по месяцу, онлайн и т.д.)

## Репозиторий

Фронт в папке `frontend/`. Бэкенд и интеграция — в разработке; после мержа можно подключать API в `src/services/chat.js`.
