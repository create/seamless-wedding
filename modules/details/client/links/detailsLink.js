"use strict";
module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetBackground(element);
    common.resetFixed(element);

    // function executeAnimation() {
    //     animate("pre").then(function () {
    //         return animate("one");
    //     }).then(function () {
    //         return animate("two");
    //     }).then(function () {
    //         return animate("three");
    //     });
    // }
    // function animate(id) {
    //     var defer = $.Deferred();

    //     scope.$broadcast("PlayAnimation-" + id, {
    //         callback: function (completedId) {
    //             defer.resolve();
    //         }
    //     });
    //     return defer.promise();
    // }

    // var $playButton = $(".play-button");
    // var $window = $(window);

    // $window.scroll(function (event) {
    //     return $window.scrollTop() < 90 ? $playButton.fadeIn(2000) : $playButton.fadeOut(2000);
    // });

    // // $playButton.click(function () {
    // //     executeAnimation();
    // // });

    // if ($window.width() < 800) {
    //     $playButton.hide();
    // }
    
    // // mapbox
    // var map = L.mapbox.map('map', 'jeffpyke.hm88hn3n')
    // .setView([40, -74.50], 9);
};