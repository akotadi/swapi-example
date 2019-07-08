const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const FilmSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    episode_id: {
        type: Number,
        required: true,
        unique: true,
    },
    release_date: {
        type: Date,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

module.exports = Film = mongoose.model('film', FilmSchema);