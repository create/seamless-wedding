"use strict";
module.exports = function (scope, element, attrs) {
    function executeAnimation() {
        animate("one").then(function () {
            return animate("two");
        }).then(function () {
            return animate("three");
        }).then(function () {
            return animate("four");
        }).then(function () {
            return animate("five");
        }).then(function () {
            return animate("six");
        }).then(function () {
            return animate("seven");
        });
    }
    function animate(id) {
        var defer = $.Deferred();

        scope.$broadcast("PlayAnimation-" + id, {
            callback: function (completedId) {
                defer.resolve();
            }
        });
        return defer.promise();
    }
    var $body = $("body");
    var $playButton = $(".play-button");

    var $window = $(window);
    $window.scroll(function (event) {
        $window.scrollTop() < 100 ? $playButton.show() : $playButton.hide();
    });

    $playButton.click(function () {
        executeAnimation();
    });
};