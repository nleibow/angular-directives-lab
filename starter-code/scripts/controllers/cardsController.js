angular.module('CardsAgainstAssembly', ['ngResource'])
  .controller('CardsController', CardsController)

  .factory('CardFactory', function($resource){
    return $resource('http://localhost:3000/api/:id')
  })

function CardsController(CardFactory){
 var vm = this;
    vm.questionsList=[];
    vm.singleQuestion = singleQuestion;

  function queryCards(){
   
    let cardGet = CardFactory.query({}, function(response){
      console.log(response);
      vm.questionsList = response;
    

  })}
    queryCards()
 
  function singleQuestion (card){
  vm.singleQuestion = CardFactory.get({id: card._id}, function(response){
    console.log(response);
  })
}
  
}
