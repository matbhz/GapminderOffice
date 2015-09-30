"use strict";

gapminderOfflineApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/bubbleChart', {
		templateUrl: "html/bubbleChart.html",
		controller: "BubbleChartController"
	})

	.when('/mountainChart', {
		templateUrl: "html/mountainChart.html",
		controller: "MountainChartController"
	})

	.otherwise({
		redirectTo: "/bubbleChart"
	});
}]);