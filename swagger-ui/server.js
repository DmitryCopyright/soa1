const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

const app = express();
const swaggerDocument = yaml.load(fs.readFileSync('./openapi.yaml', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log('Swagger UI доступен по адресу: http://localhost:3000/api-docs');
});