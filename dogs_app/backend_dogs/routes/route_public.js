const express = require('express');
const router = express.Router();
const upload = require('../controllers/imageController.js')
const { Breeds } = require('../models')
const {rolesAuth, validateAuth} = require("../controllers/authController");


// Получение всех пород
/* Есть ли возможность по частям обрабатывать запрос с большим кол-вом данных?
*  (см. итераторы)
* */
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
router.post('/create', upload.single('breed'),
                            async (req, res, next)=>{
    rolesAuth(['ADMIN', 'MANAGER']);
    const data_from_frontend = req.body;

    const data_to_DB = {
        breed_name: data_from_frontend.breed_name,
        info: data_from_frontend.info,
        image_path: req.file.path
    }
    await Breeds.create(data_to_DB);
    res.send('Успешно добавлена новая порода!');
})


// удаление карточки породы
router.delete('/:breedId', rolesAuth(['ADMIN', 'MANAGER']), (req,res)=>{
    const breedId = req.params.breedId
    Breeds.destroy({
        where: {
            id: breedId
        }
    })
    res.send('Карточка с породой была удалена!')
})

module.exports = router