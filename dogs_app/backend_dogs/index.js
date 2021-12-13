const express = require('express');
const cors = require("cors");
const db = require('./models')
const app = express();


app.use(cors());
app.use(express.json());



/*----------------Routers------------*/


// Главная страница
const publicRouter = require('./routes/route_public')
app.use("/public", publicRouter)

// Присоединиться (регистрация, авторизация)
const joinRouter = require('./routes/route_join')
app.use("/join", joinRouter)

// Сообщество
const privateRouter = require('./routes/route_private')
app.use("/private", privateRouter)

// Профиль пользователя

// static images folder to upload image
app.use('/images', express.static('./images'))


/* информация о проблеме, если она возникает
*  в каком диалекте такая возможность есть?
*  sequelize -> документация
* */
try{
    db.sequelize.sync().then(()=>{
        app.listen(4000, () =>{
            console.log('Server running on port 4000');
        })
    })
}catch(e){
    console.log(e)
}
