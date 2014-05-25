"use strict";

module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetBackground(element);
    common.resetFixed(element);

    console.log("mason");
    if ($(window).width() > 800) {
        var $container = $('#masongallery');
        $container.imagesLoaded( function() {
            $container.masonry({
                // options
                itemSelector: '.item',
                isAnimated: true
                
            });
        });
    }
    
};

$(document).ready(function() {
    $("a.group").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600,
        'speedOut'		:	200,
        'overlayShow'	:	false
    });
   
});