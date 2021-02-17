var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var kategorija = require('../Modeli/kategorija');

router.get('/',(req,res,next)=>{
    kategorija.find().then(resp=>{
        res.render('kategorija',{
            kategorija: resp
        })
    }).catch(err=>{
        console.log(err);
    })
});

router.post('/',(req,res,next)=>{
    let k = new kategorija();
    k.naziv = req.body.naziv;
    k.save().then(resp=>{
        res.status(200).json({naziv: k.naziv})
    }).catch(err=>{
        console.log('Greska pri unosu kategorije');
        res.sendStatus(400);
    })
});


router.delete('/:naziv',(req,res,next)=>{
    kategorija.findOneAndRemove({naziv: req.params.naziv}).then(resp=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.sendStatus(404);
    })
});

module.exports = router;