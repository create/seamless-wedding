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
        $scope.poem = $storyService.poem()[$attrs.id];

        $scope.line1 = $scope.poem[0];
        $scope.line2 = $scope.poem[1];
        $scope.line3 = $scope.poem[2];
        $scope.line4 = $scope.poem[3];

        $scope.text = $storyService.text()[$attrs.id];

        $scope.title = $storyService.title()[$attrs.id];

        $scope.fullVersion = true;
    }
    function smallFunctionality() {
        $scope.fullVersion = false;
    }

    return $attrs.nextSet ? fullFunctionality() : smallFunctionality();
};
