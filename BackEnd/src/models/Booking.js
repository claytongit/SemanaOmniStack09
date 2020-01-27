const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    //Verifica qual usuario fez a reserva
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //Qual spot foi feito a reserva
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('booking', BookingSchema);