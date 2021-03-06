angular.module('myApp')
  .controller('AuthCtrl', ['$scope', '$rootScope', 'AuthService', '$state',
  function($scope, $rootScope, AuthService, $state) {
      $scope.user = {};
      $scope.login = function() {
        console.log('Got here? ');
        AuthService.login(this.user).then(function(data) {
          if (data.status === 200) {
            AuthService.setUserInfo(data);
            $state.go('home');
          } else {
            $scope.error = "Email or Password is incorrect.  Please try again.";
          }
        })
        .catch(function(err) {
          console.log(err);
        });
      };
  }]);