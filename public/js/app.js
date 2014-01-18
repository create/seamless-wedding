'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {templateUrl: 'love/home'});
    $routeProvider.when('/about', {templateUrl: 'love/about'});
    $routeProvider.when('/proposal', {templateUrl: 'love/proposal'});
    $routeProvider.when('/photos', {templateUrl: 'love/photos'});
    $routeProvider.when('/wedding', {templateUrl: 'love/wedding'});
    $routeProvider.when('/registry', {templateUrl: 'love/registry'});
    $routeProvider.when('/guestbook', {templateUrl: 'love/guestbook'});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);