const express = require('express');
const router = express.Router();
const upload = require('../controllers/imageController.js')
const { Breeds, Likes } = require('../models')
const {rolesAuth, validateAuth} = require("../controllers/authController");


// Получение всех пород
/* Есть ли возможность по частям обрабатывать запрос с большим кол-вом данных?
*  (см. итераторы)
* */
router.get('/', async (req, res)=>{
    const listOfBreeds = await Breeds.findAll({include: [Likes]});
    res.json(listOfBreeds)
})

// Конкретная порода
router.get('/breed/:id', async (req, res)=>{
    const id = req.params.id;
    const id_Breed = await Breeds.findByPk(id)
    if (!id_Breed) res.json({error:"Данная порода отсутствует в базе данных"})
    else res.json(id_Breed);
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


// удаление карточки породы (только админ и менеджер)
router.delete('/:breedId', rolesAuth(['ADMIN', 'MANAGER']), async (req,res)=>{
    const breedId = req.params.breedId
    await Breeds.destroy({
        where: {
            id: breedId
        }
    })
    res.send('Карточка с породой была удалена!')
})

// лайк породы от пользователя
router.post('/like', validateAuth, async (req, res) => {
    const BreedId_from_frontend = req.body.BreedId
    const UserId_from_token = req.UserSpecialInfo.id

    const checking = await Likes.findOne({
        where: {
            UserId: UserId_from_token,
            BreedId: BreedId_from_frontend
        }
    })
    if (!checking){
         await Likes.create(
            {
                UserId: UserId_from_token,
                BreedId: BreedId_from_frontend
            }
        )
        res.send('Вы поставили лайк')
    }else{
        await Likes.destroy({
            where:{
                UserId: UserId_from_token,
                BreedId: BreedId_from_frontend
            }
        })
        res.send('Вы убрали лайк')
    }
})


// проверка: ставил ли пользователь лайк или нет
router.get('/like/:id', validateAuth, async (req, res) => {
    const BreedId_from_frontend = req.params.id
    const UserId_from_token = req.UserSpecialInfo.id

    const checking = await Likes.findOne({
        where: {
            UserId: UserId_from_token,
            BreedId: BreedId_from_frontend
        }
    })
    if (!checking){
        res.send(false)
    }else{
        res.send(true)
    }
})


module.exports = router