/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 3/2/14
 * Time: 6:41 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";
module.exports = function ($scope, $storyService, $attrs) {

    function fullFunctionality() {
        
        $scope.text = $storyService.text()[$attrs.id];

        $scope.title = $storyService.title()[$attrs.id];

        $scope.fullVersion = true;
    }
    function smallFunctionality() {
        $scope.fullVersion = false;
    }

    return $attrs.nextSet ? fullFunctionality() : smallFunctionality();
};
