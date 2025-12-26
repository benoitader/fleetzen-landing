# FleetZen Landing Page

Landing page moderne pour FleetZen - La solution de gestion de flotte pour artisans et TPE.

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **UI**: shadcn/ui + Tailwind CSS
- **Langage**: TypeScript (strict mode)
- **Linting**: ESLint + Prettier

## 📦 Installation

```bash
yarn install
```

## 🛠️ Développement

```bash
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
yarn build
```

Génère un export statique dans le dossier `out/` pour GitHub Pages.

## 📝 Formatage

```bash
# Format all files
yarn format

# Check formatting
yarn format:check
```

## 🚀 Déploiement sur GitHub Pages

1. Poussez le code sur GitHub
2. Allez dans Settings > Pages
3. Source: GitHub Actions
4. Le site sera déployé automatiquement

## 📁 Structure

```
src/
├── app/
│   ├── globals.css     # Styles globaux + variables CSS
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Landing page
├── components/
│   └── ui/             # Composants shadcn/ui
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
└── lib/
    └── utils.ts        # Utilitaires (cn function)
```

## ✨ Fonctionnalités

- Design moderne et responsive
- Animations fluides
- Optimisé pour le SEO
- Export statique pour GitHub Pages
- TypeScript strict mode
- Prettier format on save


