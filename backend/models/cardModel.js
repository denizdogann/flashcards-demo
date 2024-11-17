const mongoose = require("mongoose");


const cardSchema = {
    front: String,
    back: String,
    color: String

};

module.exports = mongoose.model("Card", cardSchema);