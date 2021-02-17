var mongoose = require('mongoose');

var komentarSchema = mongoose.Schema({
    autor: {
        type: String,
        required: true,
    },
    tekst:{
        type: String,
        required: true
    },
    komentar:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'komentar'
    },
    tema_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tema'
    }
});

module.exports=mongoose.model('komentar',komentarSchema);