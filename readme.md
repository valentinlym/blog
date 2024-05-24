# Blog

## Installation

Modifier la ligne 27 du ficher `.env` avec l'identifiant et le mot de passe de votre base de données.
Ajouter également une valeur à la clé `MAILER_DSN`.

```bash
composer install
symfony console doctrine:database:create
symfony console doctrine:migration:migrate
npm install
npm run build
```

[Référence >](https://www.youtube.com/playlist?list=PLv4wSD8fD6KKdkubfRsMyCvAtZZ3iM7pU)