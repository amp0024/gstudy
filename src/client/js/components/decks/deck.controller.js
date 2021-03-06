(function() {
  angular.module('myApp')
    .controller('DeckCtrl', ['$scope', '$stateParams', '$rootScope', 'HomeService', 'DeckService',
    function($scope, $stateParams, $rootScope, HomeService, DeckService) {
      $scope.getDeck = function() {
        HomeService.getOne($stateParams.id).then(function(data) {
          console.log('data', data);
          $scope.deck = data;
          DeckService.getCards(data.id).then(function(cards) {
            $scope.cards = cards;
          });
        });
      };

      $scope.newDeck = {
        cards: [{}],
        deck_name: '',
        description: '',
        user_id: JSON.parse($rootScope.currentUser).id,
      };

      $scope.addQuestion = function() {
        $scope.newDeck.cards.push({});
      };

      $scope.addDeck = function() {
        console.log($scope.newDeck);
      };

    }]);
})();