const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/ducks');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/ducks', ctrlLocations.locationInfo);
router.get('/ducks/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
