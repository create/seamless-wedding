"use strict";

module.exports = function (scope, element, attrs) {
    var $scrollToTop = $(element.find('.scroll-to-top'));
    var $body = $('html,body');
    var $stayLocalDrawer = $(element.find('.stay-local-container'));

    $scrollToTop.click(function () {
        $body.animate({ scrollTop: 0}, 1000);
        $stayLocalDrawer.hide();
    });
};