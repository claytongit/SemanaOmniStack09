const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, //pega o id que o mongoose cria pra cada usuario
        ref: 'User'
    },
});

module.exports = mongoose.model('Spot', SpotSchema);