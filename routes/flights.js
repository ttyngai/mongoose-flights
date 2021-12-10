var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);

// Get to new pages for flight creation
router.get('/new', flightsCtrl.new);

//Posts new movie
router.post('/', flightsCtrl.create);

//Show Route
router.get('/:id', flightsCtrl.show);

module.exports = router;
