const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { Users } = require('../models')
const { secret } = require('../config')
const { validateAuth } = require('../controllers/authController')

/* посмотреть транзакции на sequelize  */

// Регистрация
router.post("/registration", async (req, res) =>{
    try{
        const { username, login, info, password } = req.body;
        const candidate = await Users.findOne({ where: {login: login}})
        if (candidate) {
            res.json({error:"Пользователь с таким логином уже существует"});
        }
        const hash = await bcrypt.hash(password, 7)
        await Users.create(
                {
                    username: username,
                    login: login,
                    info: info,
                    password: hash
                })

        // После создания:
        // достанем информацию о созданном пользователе и поместим её в токен
        const createdUser = await Users.findOne({ where: {login: login}})
        console.log(createdUser)
        const accessToken = jwt.sign({id: createdUser.id, role: createdUser.role},
                                    secret, {expiresIn: '36h'});

        res.json({
            token: accessToken,
            role: createdUser.role,
            id: createdUser.id,
            message: "Пользователь успешно зарегистрирован!"});
    }catch(e){
        res.json({message:"Ошибка при регистрации", e})
    }
})

// Авторизация на сайте
router.post('/login', async (req, res)=> {
    const {login, password} = req.body;
    const user = await Users.findOne({where: {login: login}})

    if (!user) res.json({error:"Пользователя с таким логином не существует"})

    bcrypt.compare(password, user.password).then(async (match) => {
        if (!match) res.json({error:"Неправильный пароль"})
        else {
            const accessToken = jwt.sign({id: user.id, role: user.role}, secret, {expiresIn: '36h'});
            res.json({
                token: accessToken,
                role: user.role,
                id: user.id,
                message: "Вы успешно вошли в систему!"});
        }
    })
})

// Проверка того, что пользователь авторизован (что он не visitor)
router.get('/auth', validateAuth, (req, res)=>{
    res.json(req.UserSpecialInfo)
})


module.exports = router