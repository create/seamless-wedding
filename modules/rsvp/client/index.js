/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 1/19/14
 * Time: 6:08 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var moduleName = 'rsvp';

module.exports = function (angular) {
    angular.module(moduleName, [])
        .directive('rsvp', require('./directives/rsvpDirective'))
        .config(function ($routeProvider) {
            $routeProvider
                .when("/rsvp", {templateUrl: "rsvp"});
        });
    return moduleName;
};