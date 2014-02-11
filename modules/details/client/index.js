/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 1/19/14
 * Time: 6:08 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var moduleName = 'details';

module.exports = function (angular) {
    angular.module(moduleName, [])
        .directive('eventDetails', require('./directives/detailsDirective'))
        .directive('eventDetailsDrawer', require('./directives/eventDetailsDrawer'))
        .directive('mapTravelDrawer', require('./directives/mapTravelDrawer'))
        .directive('stayLocalDrawer', require('./directives/stayLocalDrawer'))
        .config(function ($routeProvider) {
            $routeProvider
                .when("/details", {templateUrl: "details"});
        });
    return moduleName;
};