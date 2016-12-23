var db = require('./api/models');

var Card = require('./api/models/Cards.js');

// var questionsList = [
//     {question: "What is Batman's guilty pleasure?",
// id: 0},
//     {question: "I'm sorry professor, I couldn't complete my homework because _________.",
// id: 1},
//     {question: "I get by with a little help from _________.", id: 2},
//     {question: "_________. It's a trap!", id: 3},
//     {question: "The class field trip was completely ruined by _________.", id: 4},
//     {question: "What's my secret power?", id: 5}
//   ];


db.Card.create(questionsList, function(err, card){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new card", card._id)
  process.exit(); // we're all done! Exit the program.
})

module.exports = questionsList;