const { Login } = require('./controllers/Login');
const { createUser } = require('./controllers/users');
const cors = require('cors');
const { celebrate, Joi, Segments } = require('celebrate');
const express = require('express');
const authMiddleware = require('./middlewares/auth.js'); // middleware para autenticar
const app = express();
const { requestLogger, errorLogger } = require('./middlewares/logger');
const port = 3000;

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/aroundb-1')
  .then(() => console.log('conectado a mongo!'))
  .catch((err) => console.log(err));

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

app.use(express.json());

// inclúyelos antes de otras rutas
app.use(cors());
app.options('*', cors()); //habilitar las solicitudes de todas las rutas

app.use(requestLogger);

app.post(
  '/signin',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  Login
);
app.post(
  '/signup',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  createUser
);

app.use(authMiddleware);

// Rutas para usuarios
app.use('/', userRouter);

// Rutas para tarjetas
app.use('/cards', cardRouter);

app.get('*', (req, res) => {
  res.status(404).send('Recurso solicitado no encontrado');
});
app.use(errorLogger);
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((req, res) => {
  res.status(500).send({ message: 'Se ha producido un error en el servidor' });
});
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('El servidor va a caer');
  }, 0);
});
