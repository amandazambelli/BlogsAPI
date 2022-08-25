require('dotenv').config();
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Erro no servidor' });
});

app.listen(port, () => console.log('ouvindo porta', port));
