app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [{
    icon: 'img/mv.jpeg',
    title: 'move',
    developer: 'MOVE, Inc.',
    price: 0.99
  },
   {
    icon: 'img/sb.jpeg',
    title: 'shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  },
                 {
    icon: 'img/gb.jpeg',
    title: 'gameboard',
    developer: 'Armando P.',
    price: 1.99
  },
  {
    icon: 'img/index.jpeg',
    title: 'forecast',
    developer: 'Forecast',
    price: 1.99
  }];
}]);
