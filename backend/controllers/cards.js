const CardModel = require('../models/card');

const getCards = async (req, res) => {
  try {
    const cards = await CardModel.find().populate('owner').populate('likes');
    return res.send(cards); // Añadido el return para ser consistente
  } catch (error) {
    return res.status(400).send({ message: 'Error al buscar tarjetas', error }); // Añadido return
  }
};

const createCard = async (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  const newCard = new CardModel({ name, link, owner });
  try {
    const savedItem = await newCard.save();
    return res.status(201).json(savedItem); // Asegurado que se retorna el resultado
  } catch (error) {
    return res.status(400).send({ message: 'Error al crear tarjeta', error }); // Return consistente en caso de error
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await CardModel.findById(req.params.cardId).orFail();
    // verifica si el usuario es el dueño de la tarjeta

    if (card.userId.toString() !== req.user._id) {
      return res
        .status(403)
        .json({ message: 'No tienes permisos para eliminar esta tarjeta' });
    }
    await card.deleteOne(); // Elimina la tarjeta
    return res.status(200).json({ message: 'Tarjeta eliminada' });
  } catch (error) {
    if (error.name === 'DocumentNotFoundError') {
      return res.status(404).json({ message: 'Tarjeta no encontrada' });
    }
    return res
      .status(500)
      .send({ message: 'Error al eliminar tarjeta', error }); // Añadido return
  }
};

const likesCard = async (req, res) => {
  try {
    const updatedLikesCard = await CardModel.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    ).orFail();

    return res.status(200).json({ updatedLikesCard }); // Añadido return aquí
  } catch (error) {
    if (error.name === 'DocumentNotFoundError') {
      return res.status(404).json({ message: 'Tarjeta no encontrada' });
    }

    return res.status(500).send({ message: 'Error al agregar like', error }); // Return agregado
  }
};

const dislikesCard = async (req, res) => {
  try {
    const updatedLikesCard = await CardModel.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true }
    ).orFail();

    return res.status(200).json({ updatedLikesCard });
  } catch (error) {
    if (error.name === 'DocumentNotFoundError') {
      return res.status(404).json({ message: 'Tarjeta no encontrada' });
    }

    return res.status(500).send({ message: 'Error al quitar like', error });
  }
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likesCard,
  dislikesCard,
};
