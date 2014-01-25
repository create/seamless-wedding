'use strict';
require('../lib/angular/angular');

var includes = [
    require('../../modules/about/client')(angular)
];

var moduleName = "justineAndCorybill";

// Declare app level module which depends on filters, and services
angular.module(moduleName, [includes]).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: '/about'});
  }]);