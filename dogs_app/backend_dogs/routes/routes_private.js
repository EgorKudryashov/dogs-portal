const express = require('express');
const router = express.Router();
const upload = require('../controllers/imageController.js')
const { Users, Cards} = require('../models')
const {jwtCheck, checkToken, validateAuth, rolesAuth} = require("../controllers/authController");

// Все пользовательские карточки
router.get('/', jwtCheck, async (req,res)=> {
    const listOfCards = await Cards.findAll({include: Users});
    res.json(listOfCards);
});

// Все карточки конкретного пользователя
router.get('/:UserId', jwtCheck, async (req,res)=> {
    const UserId = req.params.UserId
    const UserCards = await Cards.findAll({include: Users, where: {UserId: UserId}});
    res.json(UserCards);
});



// Создание пользовательской карточки
router.post('/create', upload.single('card'), jwtCheck, checkToken,
    async (req, res, next)=>{
        try{
            const data_from_frontend = req.body;
            const user = await Users.findOne({where: {login: req.UserSpecialInfo.email}})
            const data_to_DB = {
                title: data_from_frontend.title,
                content: data_from_frontend.content,
                image: req.file.path,
                UserId: user.id
            }
            await Cards.create(data_to_DB);
            res.send('Успешно создана новая карточка!');
        }catch(e){
            res.json({error: 'Возникла ошибка'})
        }
    });


// удаление пользовательской карточки (MODERATOR || ADMIN)
router.delete('/:cardId', jwtCheck, checkToken, rolesAuth(['ADMIN', 'MODERATOR']),
    async (req, res, next)=>{
    const CardId = req.params.cardId
    await Cards.destroy({
        where: {
            id: CardId
        }
    })
    res.send('Пользовательская карточка была удалена')
})
module.exports = router