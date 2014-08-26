angular.module('myApp.controllers', [])
.controller('HomeController', ['$scope', function($scope) {
	$scope.Math = window.Math;
	// Initial values
	$scope.coefficient = 1,
	$scope.start = 0,
	$scope.end = 7,
	$scope.step = 0.5;
	$scope.offset = 0;

	$scope.setData = function() {
		var data = [{
	    "key": "Series",
	    "values": []
	  }], arr = $scope.range($scope.start, $scope.end, $scope.step);

	  for(var i=0; i<arr.length; i++) {
	  	data[0].values.push([arr[i], $scope.coefficient * $scope.Math.sin(arr[i]) + $scope.offset]);
	  }

	  return data;
	};

	$scope.updateData = function() {
		$scope.chartData = $scope.setData();
	};

  $scope.range = function(start, end, step) {
  	var arr = [];

    if(start === null || end === null || step === null || step === 0) return arr;
  	for(var i=start; i<end; i+=step) {
  		arr.push(i);
  	}
  	return arr;
  };

  $scope.chartData = $scope.setData();
}]);