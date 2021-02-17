var mongoose = require('mongoose');

var temaSchema = mongoose.Schema({
    naziv:{
        type:String,
        required: true
    },
    opis:{
        type: String,
        required: true
    },
    kategorija: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kategorija',
        required: true
    },
    komentar:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'komentar'
    }],
    vrijeme_kreiranja: {
        type: Date,
        default: Date.now()
    },
    broj_komentara: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('tema',temaSchema);