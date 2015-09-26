"use strict";

var gapminderOfflineApp = angular.module('gapminderOfflineApp', ['ngRoute']);

// ROUTES

gapminderOfflineApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
//	.when('/', {
//		templateUrl: "../index.html",
//		controller: "IndexController"
//	})

	.when('/bubbleChart', {
		templateUrl: "html/bubbleChart.html",
		controller: "BubbleChartController"
	})

	.when('/mountainChart', {
		templateUrl: "html/mountainChart.html",
		controller: "MountainChartController"
	})

	.otherwise({
		redirectTo: "/"
	});
}]);

// CONTROLLERS

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