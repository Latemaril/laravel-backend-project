const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const skinRoutes = require('./routes/skinRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/skins', skinRoutes);

// Swagger setup
const swaggerOptions = {
   swaggerDefinition: {
      openapi: '3.0.0',
      info: {
         title: 'Clean Architecture API',
         version: '1.0.0',
         description: 'API documentation for Clean Architecture app'
      }
   },
   apis: ['./src/routes/*.js']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sync database and start server
sequelize.sync()
   .then(() => {
      app.listen(port, () => {
         console.log(`Server running on http://localhost:${port}`);
      });
   })
   .catch(error => {
      console.error('Unable to connect to the database:', error);
   });
