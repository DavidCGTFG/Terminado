const express = require('express');
const router = express.Router();

const itinerarioController = require('../controllers/itinerarioController');

router.route('/last').get(itinerarioController.getLastItinerario);

module.exports = router;