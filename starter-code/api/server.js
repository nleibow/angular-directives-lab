var db = require('./models');
var express = require('express'),
	app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})



  app.get('/api', function getAllCards(req, res){
  	db.Card.find({}, function(err, cards){
  	res.json(cards);
  })})
  
  

  app.get('/api/:id', function getACard(req,res){
  var idd = req.params.id
  db.Card.findOne({"_id": idd}, function(err, card){
  	res.json(card);
  })});

  app.post('/api', function newCard(req, res){
  db.Card.create(req.body, function(err, cards) {
  	console.log(cards)
  	res.json(cards);
})});
  


  app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});