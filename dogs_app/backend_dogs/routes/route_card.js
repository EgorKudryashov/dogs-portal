const express = require('express');
const router = express.Router();
const { Cards } = require('../models');

router.get('/', async (req,res)=> {
   const listOfCards = await Cards.findAll();
   res.json(listOfCards);
});

// создание карточки (все авторизованные юзеры)
router.post('/create', async (req, res)=>{
   const data_from_frontend = req.body;
   await Cards.create(data_from_frontend);
   res.json(data_from_frontend)
})

// удаление карточки пользователя (только пользователь или модератор)
router.delete('/:cardId')


module.exports = router