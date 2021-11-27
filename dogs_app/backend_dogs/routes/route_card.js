const express = require('express');
const router = express.Router();
const { Cards } = require('../models');


router.get('/', async (req,res)=> {
   const listOfPosts = await Cards.findAll();
   res.json(listOfPosts);
});
router.post('/', async (req, res)=>{
   const data_from_frontend = req.body;
   await Cards.create(data_from_frontend);
   res.json(data_from_frontend)
})


//router.post()


module.exports = router