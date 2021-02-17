var express = require('express');
var router = express.Router();
var teme = require('../Modeli/tema');
var kategorije = require('../Modeli/kategorija');

router.get('/', (req, res, next) => {
    kategorije.find().then(resp=>{
        req.kategorije = resp;
        next();
    })
},(req,res,next)=>{
    teme.find().sort({broj_komentara: -1}).then(resp=>{
        res.render('teme',{
            tema: resp,
            kategorija: req.kategorije
        })
    }).catch(err=>{
        console.log(err);
    })
});

router.post('/',(req,res,next)=>{
    let t = new teme();
    t.naziv = req.body.naziv;
    t.opis = req.body.opis;
    t.kategorija = req.body.kategorija;
    t.save().then(resp=>{
        res.status(200).json(t)
    }).catch(err=>{
        console.log(err);
        res.sendStatus(400);
    })
});
module.exports = router;