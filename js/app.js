"use strict";

var gapminderOfflineApp = angular.module('gapminderOfflineApp', ['ngRoute', 'ngAnimate']);

// ROUTES

gapminderOfflineApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "index.html",
		controller: "IndexController"
	})

	.when('/bubbleChart', {
		templateUrl: "html/bubbleChart.html",
		controller: "BubbleChartController"
	})

	.when('/mountainChart', {
		templateUrl: "../html/mountainChart.html",
		controller: "MountainChartController"
	})

	.otherwise({
		redirectTo: "/"
	});
});

// CONTROLLERS

gapminderOfflineApp.controller('IndexController', function($scope) {
	$scope.pageClass = "page-index";
});

gapminderOfflineApp.controller('BubbleChartController', function($scope) {
	$scope.pageClass = "page-bubbleChart";
});

gapminderOfflineApp.controller('MountainChartController', function($scope) {
	$scope.pageClass = "page-mountainChart";
});