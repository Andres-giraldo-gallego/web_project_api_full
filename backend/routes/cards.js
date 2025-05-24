const express = require('express');
const router = express.Router();

const { celebrate, Joi, Segments } = require('celebrate');
const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error('string.uri');
};
const {
  getCards,
  createCard,
  deleteCard,
  likesCard,
  dislikesCard,
} = require('../controllers/cards.js');

// Función para leer los datos de un archivo JSON

router.get('/', getCards);

router.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      //valor de validación de la propiedad link
      link: Joi.string().required().uri(),
    }),
  }),
  createCard
);

router.delete('/:cardId', deleteCard);

router.put('/:cardId/likes', likesCard);

router.delete('/:cardId/likes', dislikesCard);

module.exports = router;
