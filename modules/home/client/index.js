/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 1/19/14
 * Time: 6:08 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var moduleName = 'home';

module.exports = function (angular) {
    angular.module(moduleName, [])
        .directive('home', require('./directives/homeDirective'))
        .config(function ($routeProvider) {
            $routeProvider
                .when("/home", {templateUrl: "home"});
        });
    return moduleName;
};