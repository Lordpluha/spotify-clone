# 🤝 Contributing Guide

Thanks for your interest in contributing to Music Platform!

## 🚀 Getting Started

1. Fork the repo and clone it:
   ```bash
   git clone https://github.com/YOUR_USERNAME/music-platform.git
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the app:
   ```bash
   pnpm dev
   ```

## ✅ Code Standards
- TypeScript everywhere
- Follow Feature-Sliced Design (FSD) structure
- Validate all `.env` changes via `.env.schema.ts`
- Write unit & integration tests (Vitest)

## 💅 Pre-commit hooks
We use Husky + Lint-Staged. Ensure:
```bash
pnpm prepare
```

## 📦 Useful Scripts
- `pnpm docs` — build documentation
- `pnpm test` — run all tests
- `pnpm lint` — run linters

Happy coding! 🎧
