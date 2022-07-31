import express from 'express';

const router = express.Router();


router.route('/')
    .get((_req,res)=>{
        res.send(`Hola mundo: ${_req.baseUrl}`)
    });

module.exports = router;