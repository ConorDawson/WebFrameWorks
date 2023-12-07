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
router.get('/addduck', ctrlDucks.duckform);
router.post('/register', ctrlDucks.addUsers);
router.post('/login', ctrlDucks.checkUser);
router.post('/addduck', ctrlDucks.addDuck);


/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
