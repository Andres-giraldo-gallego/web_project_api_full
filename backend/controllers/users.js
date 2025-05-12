const UserModel = require('../models/user.js');

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).send('Ha ocurrido un error en el servidor');
  }
};

const getUserId = async (req, res) => {
  try {
    const faintUser = await UserModel.findById(req.params.userId).orFail();
    return res.json(faintUser);
  } catch (error) {
    if (error.name === 'DocumentNotFoundError') {
      return res.status(404).json({ message: 'ID de usuario no encontrado' });
    }
    console.log(error);
    return res.status(500).send({ message: 'Error al buscar usuario', error });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const newUser = new UserModel({ name, about, avatar });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send(
        'Se pasaron datos inválidos a los métodos para crear un usuario/tarjeta o para actualizar el avatar/perfil de un usuario'
      );
  }
};

const updateProfile = async (req, res) => {
  const { name, about } = req.body;
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      req.user._id,
      {
        name,
        about,
      },
      { new: true }
    ).orFail();

    return res.send(updateUser);
  } catch (error) {
    if (error.name === 'DocumentNotFoundError') {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }
    return res
      .status(500)
      .send({ message: 'Error al actualizar el perfil', error });
  }
};

const updateAvatar = async (req, res) => {
  const { avatar } = req.body;
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      req.user._id,
      {
        avatar,
      },
      { new: true }
    ).orFail();

    return res.send(updateUser);
  } catch (error) {
    if (error.name === 'DocumentNotFoundError') {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }
    return res
      .status(500)
      .send({ message: 'Error al actualizar el avatar', error });
  }
};

module.exports = {
  getUsers,
  getUserId,
  createUser,
  updateProfile,
  updateAvatar,
};
