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

app.controller('deleteController', function($scope, $http) {
  $scope.selectMap = {};
  $scope.select = function(id) {
    if (!$scope.selectMap[id]) {
      console.log($scope.selectMap[id]);
      $scope.selectMap[id] = true;
    } else {
      console.log($scope.selectMap[id]);
      $scope.selectMap[id] = false;
    }
  };
  $scope.selectAll = function() {
    if ($scope.allSelected) {
      for (var key in $scope.selectMap) {
        $scope.selectMap[key] = true;
      }
    } else {
      for (var key in $scope.selectMap) {
        $scope.selectMap[key] = false;
      }
    }
  }
  $scope.delete = function() {
    if (confirm("Want to delete selected?")) {
      var deleteList = [];
      for (var key in $scope.selectMap) {
        if ($scope.selectMap[key]) {
          deleteList.push(key);
        }
      }
      $http({
        method: 'POST',
        url: '/matchManagement/delete',
        data: {list : deleteList}
      }).then(function successCallback(response) {
          console.log(response.data);
      }, function errorCallback(response) {
          console.log(response.data);
      });
    }
  }
});
