const express = require('express');
const router = express.Router();
const upload = require('../controllers/imageController.js')
const { Users, Breeds, Likes } = require('../models')
const {rolesAuth, validateAuth, jwtCheck, checkToken} = require("../controllers/authController");


// Получение всех пород
router.get('/', async (req, res)=>{
    const listOfBreeds = await Breeds.findAll({include: [Likes]});
    res.json(listOfBreeds)
})

// Получение конкретной породы
router.get('/breed/:id', async (req, res)=>{
    const id = req.params.id;
    const id_Breed = await Breeds.findByPk(id)
    if (!id_Breed) res.json({error:"Данная порода отсутствует в базе данных"})
    else res.json(id_Breed);
})

// Создание породы
router.post('/create', upload.single('breed'),
    jwtCheck, checkToken, rolesAuth(['ADMIN','MANAGER']),
    async (req, res)=>{
        const data_from_frontend = req.body;
        const data_to_DB = {
            breed_name: data_from_frontend.breed_name,
            info: data_from_frontend.info,
            image_path: req.file.path
        }
        await Breeds.create(data_to_DB);
        res.send('Успешно добавлена новая порода!');
    })

// Поставить лайк породе
router.post('/like', jwtCheck, checkToken,
        async (req, res) => {
    const BreedId_from_frontend = req.body.BreedId
    const UserLogin_from_token = req.UserSpecialInfo.email
    try{
        const userCandidate = await Users.findOne({where: {login: UserLogin_from_token}})
        const checking = await Likes.findOne({
            where: {
                UserId: userCandidate.id,
                BreedId: BreedId_from_frontend
            }
        })
        if (!checking){
            await Likes.create(
                {
                    UserId: userCandidate.id,
                    BreedId: BreedId_from_frontend
                }
            )
            res.send('Вы поставили лайк')
        }else{
            await Likes.destroy({
                where:{
                    UserId: userCandidate.id,
                    BreedId: BreedId_from_frontend
                }
            })
            res.send('Вы убрали лайк')
        }
    }catch(e) {
        res.json({error: 'Возникла ошибка при лайке'})
    }
})

// Cтавил ли пользователь лайк или нет?
router.get('/like/:id', async (req, res) => {
    try{
        const BreedId_from_frontend = req.params.id
        const UserId = req.headers.user
        const checking = await Likes.findOne({
            where: {
                UserId: UserId,
                BreedId: BreedId_from_frontend
            }
        })
        if (!checking){
            res.send(false)
        }else{
            res.send(true)
        }
    }catch(e){
        res.json({error:'Возникла ошибка при проверке'})
    }
})



// Удалить породу
router.delete('/:breedId', jwtCheck, checkToken,
    rolesAuth(['ADMIN', 'MANAGER']),
    async (req,res)=>{
    const breedId = req.params.breedId
    await Breeds.destroy({
        where: {
            id: breedId
        }
    })
    res.send('Карточка с породой была удалена!')
})


module.exports = router