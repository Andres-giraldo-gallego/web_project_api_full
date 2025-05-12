const User = require('./models/user');
const validator = require('validator');

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // para crear tokens
const authMiddleware = require('./middlewares/auth.js'); // middleware para autenticar
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/aroundb-1')
  .then(() => console.log('conectado a mongo!'))
  .catch((err) => console.log(err));

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

app.use(express.json());

app.post('/signin', async (req, res) => {
  const { body } = req;
  const { email, password } = body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign({ _id: user._id, email: user.email }, 'secret');

    res.send({ token });
  } catch (e) {
    res.status(400).send(e.message);
  }
});
app.post('/signup', async (req, res) => {
  const { body } = req;
  const { email, password } = body;
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const nuwUser = await User.create({
      email,
      password: passwordHash,
    });
    if (!nuwUser) {
      throw new Error('Hubo un error al crear el usuario');
    }
    return res.send(nuwUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.use(authMiddleware);
// Rutas para usuarios
app.use('/', userRouter);

// Rutas para tarjetas
app.use('/cards', cardRouter);

app.get('*', (req, res) => {
  res.status(404).send('Recurso solicitado no encontrado');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
