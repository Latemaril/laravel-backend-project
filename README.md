# Clean Architecture App

## Описание
Это backend приложение на Node.js с использованием архитектуры Clean Architecture. Приложение предоставляет API для управления пользователями и скинами, включая создание, редактирование, публикацию, удаление и предоставление доступа к скинам другим пользователям.

## Структура директории
```plaintext
clean-architecture-app/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── UserController.js
│   │   └── SkinController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Skin.js
│   │   ├── SharedSkin.js
│   │   └── index.js
│   ├── repositories/
│   │   ├── SkinRepository.js
│   │   └── SharedSkinRepository.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── skinRoutes.js
│   ├── services/
│   │   ├── UserService.js
│   │   └── SkinService.js
│   ├── use_cases/
│   ├── utils/
│   └── app.js
├── config/
│   └── config.json
├── migrations/
├── seeders/
├── swagger/
│   └── swagger.json
├── .env
├── package.json
└── nodemon.json
