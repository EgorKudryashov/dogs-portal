
const axios = require('axios')
const express = require('express');
const router = express.Router();
const {Users} = require("../models");
const {jwtCheck, checkToken} = require("../controllers/authController")


// Добавление пользователя в БД
// Или возвращение данных о пользователе


router.get('/auth0', jwtCheck, async (req, res)=>{
    try{
        const accessToken = req.headers.authorization.split(' ')[1];
        const userInfo = await axios.get('https://dev-zfwjpqk9.us.auth0.com/userinfo',{
            headers:{
                authorization: `Bearer ${accessToken}`
            }
        })
        const login = userInfo.data.email
        // Вытащили информацию о пользователе, в частности логин
        const candidate = await Users.findOne({ where: {login: login}})
        if (!candidate) {
            // если нет, то регистрируем
            const data_to_database = {
                username: userInfo.data.name,
                login: login,
                avatar_path: userInfo.data.picture
            }
            await Users.create(data_to_database)
            const candidate = await Users.findOne({where: {login: login}})
        }
        res.json(candidate)
    }catch(e){
        res.json({error: e.message})
    }
})

module.exports = router