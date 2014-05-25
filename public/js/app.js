'use strict';
var ang = require('../lib/angular.shim');
require('../lib/masonry.pkgd.min.js');

var includes = [
    require('../../modules/details/client')(ang),
    require('../../modules/entourage/client')(ang),
    require('../../modules/gallery/client')(ang),
    require('../../modules/home/client')(ang),
    require('../../modules/registry/client')(ang),
    require('../../modules/story/client')(ang),
    require('../../modules/rsvp/client')(ang)
];

var moduleName = "mackenzieAndJonathanPyke";

// Declare app level module which depends on filters, and services
ang.module(moduleName, includes).
    config(['$routeProvider', '$locationProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);