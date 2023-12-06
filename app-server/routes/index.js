const express = require('express');
const router = express.Router();
const ctrlDucks = require('../controllers/ducks');
const ctrlOthers = require('../controllers/others');
/* Ducks pages */


router.get('/', ctrlDucks.login);
router.get('/register', ctrlDucks.register);
router.get('/home', ctrlDucks.homelist);
router.get('/ducks/:id', ctrlDucks.duckinfo);
router.get('/ducks/review/new', ctrlDucks.addReview);


/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
