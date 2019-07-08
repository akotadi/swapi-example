const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const StarshipSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    length: {
        type: String,
        required: true,
    },
    cost_in_credits: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

module.exports = Starship = mongoose.model('starship', StarshipSchema);