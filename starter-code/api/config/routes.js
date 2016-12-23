var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

var cardController = require('../controllers/cards');

router.route('/cards')
	.get(cardController.getAll)