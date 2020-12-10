'use strict';

const express = require('express'); // Use express.
const app = express(); // Initialize express.

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logRequest = require('./middleware/logger');
const validateQuery = require('./middleware/validator');

app.use(express.json());
app.use(logRequest);
// app.use(validateQuery);

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});
app.get('/person', validateQuery, (req, res) => {
  let output = {
    name: req.query.name,
  };
  res.status(200).json(output);
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT) {
  app.listen(PORT, () => console.log(`Order up on ${PORT}!`));
}

module.exports = {
  server: app,
  start: start,
};
