"use strict";

module.exports = function (scope, element, attrs) {
    var $address = $(".address");
    $address.click(function (event) {
        window.open(event.target.dataset.link, '_blank');
    });

    var $scrollToTop = $(element.find('.scroll-to-top'));
    var $body = $('html,body');
    var $stayLocalDrawer = $(element.find('.stay-local-container'));

    $scrollToTop.click(function () {
        $body.animate({ scrollTop: 0}, 1000);
        $stayLocalDrawer.hide();
    });
};