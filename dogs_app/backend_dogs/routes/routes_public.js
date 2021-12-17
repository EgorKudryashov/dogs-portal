const express = require('express');
const router = express.Router();
const upload = require('../controllers/imageController.js')
const { Users, Breeds, Likes, User_like_breed} = require('../models')
const {rolesAuth, jwtCheck, checkToken} = require("../controllers/authController");
const db = require('../models')



// Получение всех пород
router.get('/', async (req, res)=>{
    const listOfBreeds = await Breeds.findAll({
        order: [['breed_name', 'ASC']],
        include: {
            model: Likes,
            attributes:{
                exclude: ['BreedId'],
            }
        },
        attributes:{
            exclude: ['info'],
        }
    });
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
        const t = await db.sequelize.transaction();
        // Транзакция CREATE в основной таблице + CREATE в подчиненной
        const data_from_frontend = req.body;
        const data_to_DB = {
            breed_name: data_from_frontend.breed_name,
            info: data_from_frontend.info,
            image_path: req.file.path
        }
        try{
            const breed = await Breeds.create(data_to_DB, {transaction: t});
            await Likes.create({BreedId: breed.id}, {transaction: t});
            await t.commit();
            res.send('Успешно добавлена новая порода!');
        }catch(e){
            res.json({error:'Ошибка при создании'});
            await t.rollback();
        }
    })

// Поставить лайк породе
router.post('/like', jwtCheck, checkToken,
        async (req, res) => {
    const BreedId_from_frontend = req.body.BreedId;
    const UserLogin_from_token = req.UserSpecialInfo.email;
    const userCandidate = await Users.findOne({where: {login: UserLogin_from_token}});
    const t = await db.sequelize.transaction();
            // Транзакция - SELECT в соединительной таблице,
            // CREATE | DELETE в соединительной таблице
            // UPDATE в таблице Likes
    try{
        const checking = await User_like_breed.findOne({
            where: {BreedId: BreedId_from_frontend, UserId: userCandidate.id}
        }, {transaction: t})
        if (!checking) {
            await User_like_breed.create({BreedId: BreedId_from_frontend, UserId: userCandidate.id}, {transaction: t})
            await Likes.increment({count:+1}, {where: {BreedId: BreedId_from_frontend}, transaction: t})
            res.send('Вы поставили лайк')
        }
        else {
            await User_like_breed.destroy({where: {BreedId: BreedId_from_frontend, UserId: userCandidate.id}, transaction: t})
            await Likes.increment({count:-1}, {where: {BreedId: BreedId_from_frontend}, transaction: t})
            res.send('Вы убрали лайк')
        }
        t.commit()
    }catch(e) {
        res.json({error: 'Возникла ошибка при лайке'})
        t.rollback()
    }
})

// Cтавил ли пользователь лайк или нет?
router.get('/like/:id', async (req, res) => {
    try{
        const BreedId_from_frontend = req.params.id
        const UserId = req.headers.user
        const checking = await User_like_breed.findOne({
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