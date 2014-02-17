"use strict";

module.exports = function (scope, element, attrs) {
    var $scrollToTop = $(element.find('.scroll-to-top'));
    var $body = $('html,body');
    var $eventDetailsDrawer = $(element.find('.event-details-container'));

    $scrollToTop.click(function () {
        $body.animate({ scrollTop: 0}, 1000);
        $eventDetailsDrawer.hide();
    });
};