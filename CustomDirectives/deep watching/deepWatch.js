var app = angular.module('deepWatch', []);

app.controller('deepWatchCtrl', function ($scope, $log) {
    var classes = {};
    classes.coms319 = new Array();
    classes.coms319[0] = 0;
    classes.coms309 = 0;
    classes.coms363 = 0;
    classes.totalInterest = 0;
    $scope.classes = classes;
	
	$scope.$watch('classes.coms319[0]');
	$scope.$watch('classes.coms309');
	$scope.$watch('classes.coms363');
    $scope.$watchCollection("classes.coms319");

    $scope.calcTotal = function () {
        $log.log('calling calcTotal');
        $scope.classes.totalInterest = $scope.classes.coms319[0] + $scope.classes.coms309 + $scope.classes.coms363;
    };

    $scope.i319 = function () {
        $scope.classes.coms319[0]++;
    };

    $scope.i309 = function () {
        $scope.classes.coms309++;
    };

    $scope.i363 = function () {
        $scope.classes.coms363++;
    };	
	
	 $scope.d319 = function () {
        $scope.classes.coms319[0]--;
		if ($scope.classes.coms319[0] < 0) {
			$scope.classes.coms319[0] = 0;
		}
    };

    $scope.d309 = function () {
        $scope.classes.coms309--;
		if ($scope.classes.coms309 < 0) {
			$scope.classes.coms309 = 0;
		}
    };

    $scope.d363 = function () {
        $scope.classes.coms363--;
		if ($scope.classes.coms363 < 0) {
			$scope.classes.coms363 = 0;
		}
    };
    $scope.$watch('classes', $scope.calcTotal, true);
});