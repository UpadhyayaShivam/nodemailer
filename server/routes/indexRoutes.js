const { signup, getbill } = require('../controllers/indexController');

const router = require('express').Router();


// signup post route
router.post('/signup',signup);
router.post('/getbill', getbill);

module.exports = router;