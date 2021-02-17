var express = require('express');
var router = express.Router();
var komentari = require('../Modeli/komentar');
var tema = require("../Modeli/tema");

router.get('/:id',(req,res,next)=>{
    komentari.find({ tema_id: req.params.id, komentar: { $exists: false } }).then(resp=>{
        console.log(resp)
        res.render('komentari',{
            komentar: resp,
            id: req.params.id,
        })
    }).catch(err=>{
        console.log(err);
    })
});

router.get('/:id/podKomentari', (req, res, next) => {
    komentari.find({ komentar: req.params.id })
        .then(resp => {
            console.log(resp);

            res.status(200).json({
                pk: resp
            })
        })
        .catch(err => {
            console.log(err);

            res.sendStatus(400);
        })
});

router.post('/:id/dodajPodkomentar', (req, res, next) => {
    let k = new komentari();
    k.autor = req.body.autor;
    k.komentar = req.params.id;
    k.tekst = req.body.komentar;

    k.save()
        .then(resp => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(400);
        })
})

router.post('/:id',(req,res,next)=>{
    let k = new komentari;
    k.autor = req.body.autor,
    k.tekst = req.body.tekst,
    k.tema_id = req.params.id
    k.save().then(resp=>{
        res.status(200).json({k});
    }).catch(err=>{
        console.log(err);
        res.sendStatus(400);
    })
});


module.exports = router;