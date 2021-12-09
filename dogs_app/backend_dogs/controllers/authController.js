const { verify }  = require('jsonwebtoken');
const { secret } = require('../config.js')

const validateAuth = (req, res, next) =>{
    // в заголовке будет токен
    const accessToken = req.header("accessToken");

    if (!accessToken) return res.json({ error:"Пользователь не авторизован" })
    try{
        const validToken = verify(accessToken, secret);
        // в поле req.UserSpecialInfo будет храниться информация, которая закодирована в токене
        // в нашем случае это роль и id пользователя
        req.UserSpecialInfo = validToken;
        if (validToken) {
            return next();
        }
    }catch(e){
        return res.json({error: 'Возникла ошибка'});
    }
};

module.exports = { validateAuth };