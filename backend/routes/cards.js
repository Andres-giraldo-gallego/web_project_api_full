const express = require('express');
const router = express.Router();

const {
  getCards,
  createCard,
  deleteCard,
  likesCard,
  dislikesCard,
} = require('../controllers/cards.js');

// Función para leer los datos de un archivo JSON

router.get('/', getCards);

router.post('/', createCard);

router.delete('/:cardId', deleteCard);

router.put('/:cardId/likes', likesCard);

router.delete('/:cardId/likes', dislikesCard);

module.exports = router;
