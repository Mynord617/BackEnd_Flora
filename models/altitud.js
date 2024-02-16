const mongoose = require("mongoose");
const schema = mongoose.Schema;

const altitudSchema = new schema({
    altitudId: {type: String},
    altitudCalificacion: {type: String},
}, {versionKey: false});

const Altitud = mongoose.model('altitud', altitudSchema);
module.exports = Altitud;