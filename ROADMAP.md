# 🎧 Music Platform (Spotify Clone) — Backlog

## 📦 Этап 0: Подготовка окружения

### ✅ Архитектура и структура
- [ ] Инициализировать TurboRepo: `apps/`, `packages/`, `shared/`
- [ ] Настроить `pnpm` workspaces
- [ ] Настроить Feature-Sliced Design (client)
- [ ] Создать структуру базовых слоёв: `entities`, `features`, `widgets`, `pages`, `shared`

### 🔧 Developer Tools & DX
- [ ] Настроить ESLint + Prettier + Stylelint
- [ ] Настроить Husky + Lint-staged + Commitlint
- [ ] Настроить Gitflow
- [ ] Настроить Shadcn UI
- [ ] Добавить MSW (mock server)
- [ ] Настроить Storybook

### 🚀 CI/CD
- [ ] GitHub Actions: линт, билд, тесты
- [ ] Интеграция Sentry
- [ ] Docker base (dev/prod)

---

## 🚀 Этап 1: MVP

### 🌐 Client
- [ ] Реализовать Server Actions: login/register
- [ ] Настроить React Hook Form + Zod
- [ ] Главная страница с треками (playlist overview)
- [ ] Страница плеера (play, pause, progress)
- [ ] Профиль пользователя
- [ ] Подключить i18n
- [ ] Настроить @tanstack/react-query + openapiTS codegen
- [ ] Обработка ошибок через Error Boundary + Sentry

### 🔌 Backend (NestJS)
- [ ] Настроить NestJS с REST API
- [ ] Реализовать Auth (JWT access + refresh + OAuth2)
- [ ] Реализовать CRUD: Users / Tracks
- [ ] Подключить MongoDB/PostgreSQL (на выбор)
- [ ] Swagger + Zod-контракты
- [ ] SSE или WebSocket: базовые обновления
- [ ] Реализовать загрузку треков (локально или через S3)

---

## 📱 Этап 2: Mobile App

- [ ] Инициализировать React Native проект
- [ ] Подключить auth через API
- [ ] Главная с треками
- [ ] Мини-плеер
- [ ] Подключение Socket.io / REST

---

## 🔐 Этап 3: Advanced Security

- [ ] Реализовать 2FA (TOTP + QR-коды)
- [ ] Fingerprint привязка устройства
- [ ] История прослушиваний
- [ ] Система лайков, избранных, плейлистов
- [ ] Подписка на артистов

---

## 🛠 Этап 4: Админ-панель

- [ ] Подключить NestJS Admin или AdminJS
- [ ] Управление пользователями и треками
- [ ] CRUD + права доступа
- [ ] Метрики по пользователям

---

## 🔔 Этап 5: Уведомления

- [ ] Подключить SSE/WebSocket подписки
- [ ] Redis pub/sub
- [ ] Очереди задач через RabbitMQ
- [ ] Email-уведомления (Mailgun)

---

## 🚢 Этап 6: Продакшн & деплой

- [ ] Docker: сборка production-контейнеров
- [ ] CI/CD pipeline (build, test, push)
- [ ] Скриншот-тесты и Vitest coverage
- [ ] Мониторинг: Sentry + Prometheus
- [ ] Деплой на Vercel / Railway / VPS

---

## 🧪 Future (учебные миграции)

- [ ] Перевод части API на GraphQL
- [ ] Десктоп-клиент на Tauri
- [ ] Миграция админки на AdminJS

