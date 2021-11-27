const express = require('express');
const cors = require("cors");
const db = require('./models')

const app = express();
app.use(express.json());
app.use(cors());

// Routers
const postRouter = require('./routes/route_card')
app.use("/community", postRouter)

db.sequelize.sync().then(()=>{
    app.listen(4000, () =>{
        console.log('Server running on port 4000');
    })
})