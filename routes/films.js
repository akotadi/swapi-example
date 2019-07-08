var express = require('express');
var router = express.Router();

const Film = require('./../models/Film');

/* 
    @route      GET films/
    @desc       Get all Films
    @access     Public
*/
router.get('/', (req, res, next) => {
    Film.find()
        .sort({ episode_id: 1 })
        .then(films => {
            res.json(films)
        });
});

/* 
    @route      POST films/
    @desc       Create a new Film
    @access     Public
*/
router.post('/', (req, res, next) => {
    const newFilm = new Film({
        title: req.body.title,
        director: req.body.director,
        episode_id: req.body.episode_id,
        release_date: req.body.release_date,
        url: req.body.url,
    });

    newFilm.save()
        .then(film => res.json(film));
});

/* 
    @route      UPDATE films/edit/:id
    @desc       Update a Film
    @access     Public
*/
router.post('/edit/:id', async function updateFilm(req, res, next){
    const film = {
        title: req.body.title,
        director: req.body.director,
        episode_id: req.body.episode_id,
        release_date: req.body.release_date,
        url: req.body.url,
    };

    const query = { _id: req.params.id };

    try {
        const response = await Film.findOneAndUpdate(
            query,
            film,
            { upsert: true, new: true, runValidators: true }
        );
        res.json({ success: true });
    } catch (error) {
        console.log(err);
        return;
    }
});

/* 
    @route      DELETE films/:id
    @desc       Erase a Film
    @access     Public
*/
router.delete('/:id', (req, res, next) => {
    Film.findById(req.params.id)
        .then(film => film.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
