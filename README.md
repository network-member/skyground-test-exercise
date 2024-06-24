<h1 align="center">Skyground test exercise</h1>

Express. React

## Requirements

- Node: 20.\*
- Yarn: 4.\*

## UI:

```bash
cd ./ui
yarn install --immutable
cp .env.example .env
yarn dev
```

## API:

```bash
cd ./api
yarn install --immutable
cp .env.example .env
yarn migrations:sync
yarn dev
```
