"use strict";

module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetBackground(element);
    common.resetFixed(element);    
    if (width > 800) {
        var $container = $('#masongallery');
        $container.imagesLoaded( function() {
            setTimeout(function() {
                $container.masonry({
                    // options
                    itemSelector: '.item',
                    isAnimated: true
                    
                });
            }, 100);
            
        });
    } else {
        $('#masongallery img').css({"position": "static",
                    'height': 'auto !important',
                    'width': '80% !important',
                    'display': 'block !important',
                    'margin': '50px auto !important',
                    'border-radius': '50px !important'});
    }
    
};
var width = $(window).width();
$(document).ready(function() {
    $("a.group").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600,
        'speedOut'		:	200,
        'overlayShow'	:	false

    });
   
});