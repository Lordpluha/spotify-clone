# 📋 Backlog — Music Platform (Spotify Clone)

Разработка проекта ориентирована на open-source, выполняется в небольшой команде, фокус — на достижении MVP за 3–4 месяца. Каждый этап содержит конкретные задачи, отсортированные по приоритету и взаимозависимостям.

---

## ✅ Milestone 1: Monorepo Bootstrap (1 неделя)

### 🎯 Цель
Подготовить структуру проекта, настроить инструменты, CI, окружение.

### Задачи
1. 🔧 `Scaffold monorepo` со структурой apps/ и packages/ [P0]
2. 🧹 Настроить `ESLint`, `Prettier`, `Stylelint` + husky + lint-staged [P0]
3. 🔐 Создать `.env.schema.ts` + валидация через `Zod` [P0]
4. 🐳 `Dockerfile` и `docker-compose` (client, api, mongo, redis, nginx) [P1]
5. ⚙️ GitHub Actions: тесты, линт, билд [P1]
6. 🪪 Добавить Sentry (self-hosted) + pino [P2]

---

## 🚀 Milestone 2: MVP Authentication (1.5–2 недели)

### 🎯 Цель
Базовая регистрация/авторизация, OAuth, 2FA.

### Задачи
1. 🔑 Email/password регистрация и логин (JWT) [P0]
2. 🔁 Refresh токены + хранение в Redis [P0]
3. 🔐 OAuth (Google, GitHub) [P1]
4. 🔒 2FA (email code, optional TOTP) [P1]
5. 🧪 Unit-тесты Auth модуля [P1]
6. 📄 Swagger + Zod sync [P2]

---

## 🎵 Milestone 3: Upload & Streaming (2–3 недели)

### 🎯 Цель
Возможность загружать треки, хранить, стримить, прослушивать.

### Задачи
1. 📂 Endpoint `/upload` (Multer) + сохранение метаданных [P0]
2. 🖼 Обработка обложки (CDN, minio/s3-compatible) [P1]
3. 🔊 Стриминг `/stream/:id` (Nest Response) [P0]
4. 🧩 Плеер (Next.js) + play/pause/volume [P0]
5. 📈 Учет лайков, прослушиваний [P1]
6. 📁 My uploads страница [P2]

---

## 🔄 Milestone 4: Mobile MVP (2–3 недели)

### 🎯 Цель
Базовое React Native приложение: список, плеер, авторизация.

### Задачи
1. 🎨 RN scaffold, NativeBase + Zustand [P0]
2. 🔌 Авторизация, OAuth + query cache + persist [P0]
3. 🔉 Мини-плеер + play/pause [P1]
4. ❤️ Лайк трека + сохранение [P1]
5. 📱 UI шлифовка [P2]

---

## 📈 Milestone 5: Monitoring & Reliability (1 неделя)

### 🎯 Цель
Добавить наблюдаемость, метрики, логирование.

### Задачи
1. 📊 Prometheus + Nest metrics [P0]
2. 📉 Grafana dashboard (API/Streaming/errors) [P0]
3. 📦 Email трекинг (Mailgun open/click) [P1]
4. 📚 Логи nestjs-pino + Sentry [P1]

---

## 📚 Milestone 6: Docs & Community (1 неделя)

### 🎯 Цель
Создать инфраструктуру документации и привлечения контрибьюторов.

### Задачи
1. 📝 Mintlify (архитектура, структура, env) [P0]
2. 🔧 CONTRIBUTING.md + CODE_OF_CONDUCT.md [P0]
3. 📖 API Docs через Swagger + Markdown [P1]
4. 🧠 FAQ, style guide, commands overview [P2]

---

## 🔢 Приоритеты
- **P0** — критично для MVP
- **P1** — важно, но можно отложить
- **P2** — nice-to-have

