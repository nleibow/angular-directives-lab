var Card = require('../models/Card');

function getAll(request, response) {
	Card.find(function(error, cards){
		if(error) response.json({message: 'Could not find any cards'});

		response.json({cards: cards});
	}).select('-__v');
}

function getCard(request, response) {
	var id = request.params.id;
	Card.findById({_id: id}, function(error, card) {
		if(error) response.json({message: 'Could not find card b/c:' + error});

    response.json({card: card});
  }).select('-__v');
}
