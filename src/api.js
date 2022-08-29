const express = require('express');

const routeLogin = require('./routes/login');
const routeUser = require('./routes/user');
const routeCategory = require('./routes/category');
const routePost = require('./routes/post');

const app = express();

app.use(express.json());

app.use('/login', routeLogin);
app.use('/user', routeUser);
app.use('/categories', routeCategory);
app.use('/post', routePost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
