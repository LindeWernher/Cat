var mongoose = require('mongoose');

var kategorijaSchema = mongoose.Schema({
    naziv: {
        type: String,
        required: true
    },
    teme:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tema'
    }
});

module.exports=mongoose.model('kategorija',kategorijaSchema);