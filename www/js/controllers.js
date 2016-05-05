angular.module('myspices.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('CuisinesCtrl', function($scope, cuisineService) {
  $scope.cuisines = cuisineService.getCuisines();
})

.controller('CuisineDetailCtrl', function($scope, $stateParams, cuisineService, spiceService) {
  $scope.spices = spiceService.getSpices();
  $scope.cuisine = cuisineService.getCuisine($stateParams.id);
})

.controller('SpiceDetailCtrl', function($scope, $stateParams, cuisineService, spiceService) {
  $scope.spice = spiceService.getSpice($stateParams.id);
  $scope.cuisine = cuisineService.getCuisine($stateParams.id);
})

.controller('AddSpiceCtrl', function($scope, spiceService) {
  $scope.spice = {
    'title' : $scope.title,
    'cuisine' : $scope.cuisine,
    'img' : '',
    'description' : $scope.description,
    'dishes' : $scope.dishes,
    'id' : ''
  }
  spiceService.addSpice($scope.spice);
});
