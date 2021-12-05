const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { Users } = require('../models')
const { secret } = require('../config')

// Регистрация
router.post("/registration", async (req, res) =>{
    try{
        const { username, login, info, password } = req.body;
        const candidate = await Users.findOne({ where: {login: login}})
        if (candidate) {
            res.status(400).json({message:"Пользователь с таким именем/логином уже существует"});
        }
        const hash = await bcrypt.hash(password, 7)
        Users.create(
                {
                    username: username,
                    login: login,
                    info: info,
                    password: hash
                })
        res.send('Пользователь успешно зарегистрирован')
    }catch(e){
        res.status(400).json({message:"Ошибка при регистрации", e})
    }
})

// Авторизация на сайте
router.post('/login', async (req, res)=> {
    const {login, password} = req.body;
    const user = await Users.findOne({where: {login: login}})

    if (!user) res.status(400).json({message:"Пользователя с таким логином не существует"})

    bcrypt.compare(password, user.password).then(async (match) => {
        if (!match) res.status(400).json({message:"Неправильный пароль"})
        else {
            const accessToken = jwt.sign({id: user.id, role: user.role}, secret, {expiresIn: '36h'});
            res.send(`Добро пожаловать! Ваш токен: ${accessToken}`);
        }
    })
})


module.exports = router