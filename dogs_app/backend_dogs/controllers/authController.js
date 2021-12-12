const { verify }  = require('jsonwebtoken');
const { secret } = require('../config.js')
const e = require("express");

const validateAuth = (req, res, next) =>{
    // в заголовке будет токен
    const accessToken = req.header('accessToken');
    if (!accessToken) return res.json({ error:"Пользователь не авторизован" })
    try{
        const validToken = verify(accessToken, secret);
        // в поле req.UserSpecialInfo будет храниться информация, которая закодирована в токене
        // в нашем случае это роль и id пользователя
        if (validToken) {
            req.UserSpecialInfo = validToken;
            return next();
        }
        else { return res.json({error: 'Возникла ошибка'}); }
    }catch(e){
        return res.json({error: 'Возникла ошибка'});
    }
};

const rolesAuth = (permission) => {
    return (req, res, next) =>{
        const accessToken = req.header('accessToken');
        if (!accessToken) return res.json({ error:"Пользователь не авторизован" })

        try{
            const validToken = verify(accessToken, secret);
            if (validToken) {
                const UserRole = validToken.role
                if (permission.includes(UserRole)){
                    return next();
                }else{
                    return res.json({
                        error: "Вы не имеете прав доступа для совершения этого действия"
                    })
                }
            }
            else { return res.json({error: 'Возникла ошибка'}); }
        }catch(e){
            return res.json({error: 'Возникла ошибка'});
        }
    }
}

module.exports = { validateAuth, rolesAuth };