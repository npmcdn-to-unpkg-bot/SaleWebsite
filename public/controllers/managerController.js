var app = angular.module('manager', []);
app.constant('kVIEW_ENUM', {
  OVERVIEW : 0,
  INSERT : 1,
  DELETE: 2
});

app.run(function($rootScope, kVIEW_ENUM) {
  $rootScope.kVIEW_ENUM = kVIEW_ENUM;
  $rootScope.viewSwitch = 0;
});

app.controller('deleteController', function($scope) {
  $scope.select = function(id) {
    console.log(id);
  };
});
