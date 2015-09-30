"use strict";

gapminderOfflineApp.controller('IndexController', function($scope) {
	$scope.pageClass = "page-index";

});

gapminderOfflineApp.controller('BubbleChartController', function($scope) {
	$scope.pageClass = "page-bubbleChart";
	$scope.pageName = "bubbleChart";
});

gapminderOfflineApp.controller('MountainChartController', function($scope) {
	$scope.pageClass = "page-mountainChart";
});