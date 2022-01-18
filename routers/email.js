
const {Router, response} = require('express');
const enviarEmail = require('../helpers/email_send');
require('dotenv').config();





const router = Router();


router.post('/', async(req, res = response) => {

    try {

        /* let email = "sawa_sm@hotmail.com"; */
        let email = "tomasgit@hotmail.com";
        /* console.log(req.body); */
        enviarEmail(req.body, email)
        .then( response => { 
            res.json({
                ok:true
            })
        })
    
        .catch( err => {
            console.log(err)
            res.json({ 
                ok:false,
                error: err})
        })
    } catch (error) {
        res.json({
            ok:false,
            msg: error
        })
    }
 

    
})



module.exports = router;