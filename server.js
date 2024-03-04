const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const sequelize  = require('./config/connection');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Set up Handlebars as the templating engine
app.engine('handlebars', exphbs({
  partialsDir: path.join(__dirname, 'views', 'partials'),
}));
app.set("view engine", "handlebars");

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));



// Set up routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
  });
});