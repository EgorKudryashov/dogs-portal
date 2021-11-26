const express = require('express');
/*
* Express - это функция, которая при запуске создает
* приложение для работы с сервером
* */
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;

try{
    // прослушивание 4000 порта
    app.listen(4000, ()=>{
        console.log('Server started on 4000 port');
    })
}catch(e){
    console.log(e);
}
