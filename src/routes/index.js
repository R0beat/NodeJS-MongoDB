const express = require('express');
//Necesitamos el metodo router que nos devuelve un objeto y lo alamacenaremos en uan variable
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

module.exports = router;