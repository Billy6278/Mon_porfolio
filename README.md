# Mon Portfolio

Application full-stack de portfolio personnel.

## Structure du projet

```
Mon_portfolio/
├── backend/                 # Node.js + Express + Sequelize
│   ├── src/
│   ├── migrations/
│   ├── seeders/
│   ├── package.json
│   ├── .env
│   └── server.js
│
├── frontend/                # React + Vite
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

## Prérequis

- Node.js 18+
- PostgreSQL

## Installation

### Backend

```bash
cd backend
npm install
cp .env.example .env   # puis configurez vos variables
npm run db:test
npm run dev
```

Le serveur API démarre sur `http://localhost:5000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

L'application démarre sur `http://localhost:5173`.

## Scripts utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` (backend) | Démarre l'API en mode développement |
| `npm run db:migrate` (backend) | Exécute les migrations Sequelize |
| `npm run db:seed` (backend) | Exécute les seeders |
| `npm run dev` (frontend) | Démarre Vite en mode développement |
| `npm run build` (frontend) | Build de production |

## Variables d'environnement (backend)

| Variable | Description |
|----------|-------------|
| `PORT` | Port du serveur (défaut : 5000) |
| `DB_HOST` | Hôte PostgreSQL |
| `DB_PORT` | Port PostgreSQL |
| `DB_NAME` | Nom de la base de données |
| `DB_USER` | Utilisateur PostgreSQL |
| `DB_PASSWORD` | Mot de passe PostgreSQL |
| `JWT_SECRET` | Clé secrète pour les tokens JWT |
| `NODE_ENV` | Environnement (`development`, `production`) |
