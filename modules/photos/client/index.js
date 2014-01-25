/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 1/19/14
 * Time: 6:08 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var moduleName = 'photos';

module.exports = function (angular) {
    angular.module(moduleName)
        .config(function ($routeProvider) {
            $routeProvider
                .when("/photos", {templateUrl: "modules/photos/client/view/photos"})
        });
    return moduleName;
};