# Nurtura – Baby Development Tracking App

React Native (Expo) + Firebase app for tracking baby development milestones.

## Project foundation (done)

- **Expo** with latest SDK, TypeScript, Expo Router
- **Tooling**: ESLint, Prettier, Husky (pre-commit: lint-staged)
- **Env**: `.env.example`; use `EXPO_PUBLIC_*` for client env vars
- **Theme**: Design tokens, color palette, typography, dark/light mode via `ThemeContext`
- **Base UI**: `Button`, `Card`, `Input`, `Modal`, `Skeleton` (see `components/ui/`)

## Setup

1. **Install dependencies** (if needed, fix npm cache: `npm cache clean --force`):

   ```bash
   npm install
   ```

2. **Environment**: Copy `.env.example` to `.env` and set values.

3. **Run**:

   ```bash
   npm start
   # or: npm run ios | npm run android | npm run web
   ```

## Scripts

- `npm start` – start Expo dev server
- `npm run lint` / `npm run lint:fix` – ESLint
- `npm run format` / `npm run format:check` – Prettier

## Folder structure

- `app/` – Expo Router (file-based routes)
- `components/` – shared components; `components/ui/` – base UI (Button, Card, Input, Modal, Skeleton)
- `constants/` – `Colors.ts`, `theme/` (tokens, palette, typography)
- `contexts/` – `ThemeContext` (theme + dark/light)
- `lib/` – utilities (e.g. `env.ts`)
