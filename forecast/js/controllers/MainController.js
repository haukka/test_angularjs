app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    $scope.fiveDay = forecast.getData();
}]);
