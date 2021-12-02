const express = require('express');
const router = express.Router();
const { Breeds } = require('../models')


// Получение всех пород
router.get('/', async (req, res)=>{
    const listOfBreeds = await Breeds.findAll();
    res.json(listOfBreeds)
})

// Конкретная порода
router.get('/breed/:id', async (req, res)=>{
    const id = req.params.id;
    const id_Breed = await Breeds.findByPk(id);
    res.json(id_Breed);
})

// Только контент-менеджер и админ
// могут наполнять главную страницу
router.post('/create', async (req, res)=>{
    const data_from_frontend = req.body;
    await Breeds.create(data_from_frontend);
    res.send('Успешно добавлена новая порода!');
})
module.exports = router