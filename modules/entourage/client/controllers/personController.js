/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 3/2/14
 * Time: 6:41 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";
module.exports = function ($scope, $personService, $attrs) {

    function init() {
        $scope.fullName = $personService.getFullName($attrs.name);
        $scope.relationship = $personService.getRelationship($attrs.name);
        $scope.caption = $personService.getCaption($attrs.name);
    }

    init();
};
