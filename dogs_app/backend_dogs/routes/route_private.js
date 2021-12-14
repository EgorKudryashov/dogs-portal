const express = require('express');
const router = express.Router();
const upload = require('../controllers/imageController.js')
const { Users, Cards} = require('../models')
const {rolesAuth, validateAuth} = require("../controllers/authController");


// Все пользовательские карточки
router.get('/', validateAuth, async (req,res)=> {
    const listOfCards = await Cards.findAll({include: Users});

    res.json(listOfCards);
});

// Все карточки конкретного пользователя
router.get('/:UserId', validateAuth, async (req,res)=> {
    const UserId = req.params.UserId
    const UserCards = await Cards.findAll({include: Users, where: {UserId: UserId}});

    res.json(UserCards);
});

// создание пользовательской карточки
router.post('/create', upload.single('card'), validateAuth,
    async (req, res, next)=>{
        const data_from_frontend = req.body;
        const data_to_DB = {
            title: data_from_frontend.title,
            content: data_from_frontend.content,
            image: req.file.path,
            UserId: req.UserSpecialInfo.id
        }
        await Cards.create(data_to_DB);
        res.send('Успешно создана новая карточка!');
});

// удаление пользовательской карточки (MODERATOR || ADMIN)
router.delete('/:cardId', rolesAuth(['ADMIN', 'MANAGER']), async (req, res)=>{
    const CardId = req.params.cardId
    await Cards.destroy({
        where: {
            id: CardId
        }
    })
    res.send('Пользовательская карточка была удалена')
})


module.exports = router