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
```

# Описание директорий

## src/config
Конфигурационные файлы приложения.

- **database.js**: Конфигурация для подключения к базе данных с использованием Sequelize.

## src/controllers
Контроллеры, обрабатывающие HTTP-запросы и вызывающие соответствующие методы сервисов.

- **UserController.js**: Контроллер для управления пользователями.
- **SkinController.js**: Контроллер для управления скинами.

## src/models
Определения моделей Sequelize, представляющих таблицы базы данных.

- **User.js**: Модель пользователя.
- **Skin.js**: Модель скина.
- **SharedSkin.js**: Модель для хранения информации о скинах, доступных другим пользователям.
- **index.js**: Инициализация и экспорт всех моделей.

## src/repositories
Логика доступа к данным для моделей.

- **SkinRepository.js**: Репозиторий для модели Skin.
- **SharedSkinRepository.js**: Репозиторий для модели SharedSkin.

## src/routes
Файлы маршрутизации, определяющие пути и соответствующие контроллеры для обработки запросов.

- **userRoutes.js**: Маршруты для управления пользователями.
- **skinRoutes.js**: Маршруты для управления скинами.

## src/services
Бизнес-логика приложения, вызываемая из контроллеров.

- **UserService.js**: Сервис для управления пользователями.
- **SkinService.js**: Сервис для управления скинами.

## src/app.js
Главный файл приложения, где настраивается Express, подключаются маршруты и инициализируется база данных.

## config/
Конфигурационный файл для Sequelize.

- **config.json**: Конфигурационный файл для подключения к базе данных в разных окружениях (development, test, production).

## migrations/
Содержит миграции базы данных, которые управляют изменениями структуры базы данных с течением времени.

## seeders/
Содержит файлы для начального заполнения базы данных данными (сиды).

## swagger/
Конфигурационные файлы для автоматической генерации документации API с использованием Swagger.

- **swagger.json**: Конфигурационный файл Swagger.

## .env
Файл для хранения переменных окружения, таких как параметры подключения к базе данных и конфигурации сервера.

## package.json
Файл с метаданными о проекте и список зависимостей.

## nodemon.json
Конфигурационный файл для nodemon, который позволяет автоматически перезапускать сервер при изменении файлов.

# Используемые инструменты и технологии

- **Node.js**: Среда выполнения JavaScript.
- **Express**: Веб-фреймворк для Node.js.
- **Sequelize**: ORM для Node.js.
- **MySQL**: Система управления базами данных.
- **bcryptjs**: Библиотека для хеширования паролей.
- **Swagger**: Инструмент для документирования и тестирования API.

# Архитектура

Приложение использует архитектуру Clean Architecture, которая позволяет отделить логику доступа к данным от бизнес-логики и логики представления. Это достигается путем использования контроллеров, сервисов и репозиториев.

- **Контроллеры** принимают HTTP-запросы и возвращают HTTP-ответы.
- **Сервисы** содержат бизнес-логику и вызываются контроллерами.
- **Репозитории** взаимодействуют с базой данных и вызываются сервисами.
