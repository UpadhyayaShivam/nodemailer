const { signup } = require('../controllers/indexController');

const router = require('express').Router();


// signup post route
router.post('/signup',signup);

module.exports = router;