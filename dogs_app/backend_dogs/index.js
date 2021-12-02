const express = require('express');
const cors = require("cors");
const db = require('./models')

const app = express();
app.use(express.json());
app.use(cors());

/*----------------Routers------------*/

// Главная страница
const publicRouter = require('./routes/route_public')
app.use("/public", publicRouter)

// Сообщество


// Профиль пользователя

db.sequelize.sync().then(()=>{
    app.listen(4000, () =>{
        console.log('Server running on port 4000');
    })
})