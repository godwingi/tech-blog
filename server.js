// Dependencies
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Import express handlebards
const expressHandlebars = require('express-handlebars');
const handlebarsInstance = expressHandlebars.create({});
const path = require('path');

// Sets up Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Defining template engine
app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Listening to port
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});