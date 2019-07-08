var express = require('express');
var router = express.Router();

const Starship = require('./../models/Starship');

/* 
    @route      GET starships/
    @desc       Get all starship
    @access     Public
*/
router.get('/', (req, res, next) => {
    Starship.find()
        .sort({ name: 1 })
        .then(starship => {
            res.json(starship)
        });
});

/* 
    @route      POST starships/
    @desc       Create a new Starship
    @access     Public
*/
router.post('/', (req, res, next) => {
    const newStarship = new Starship({
        name: req.body.name,
        length: req.body.length,
        cost_in_credits: req.body.cost_in_credits,
        url: req.body.url,
    });

    newStarship.save()
        .then(starship => res.json(starship));
});

/* 
    @route      UPDATE starships/edit/:id
    @desc       Update a Starship
    @access     Public
*/
router.post('/edit/:id', async function updateStarship(req, res, next) {
    const starship = {
        name: req.body.name,
        length: req.body.length,
        cost_in_credits: req.body.cost_in_credits,
        url: req.body.url,
    };

    const query = { _id: req.params.id };

    try {
        const response = await Starship.findOneAndUpdate(
            query,
            starship,
            { upsert: true, new: true, runValidators: true }
        );
        res.json(starship);
    } catch (error) {
        console.log(err);
        return;
    }
});

/* 
    @route      DELETE starships/:id
    @desc       Erase a Starship
    @access     Public
*/
router.delete('/:id', (req, res, next) => {
    Starship.findById(req.params.id)
        .then(starship => starship.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
