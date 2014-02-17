"use strict";

module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetBackground(element);

    var $stayLocal = $(element.find(".details-top-links .stay-local"));
    var $eventDetails = $(element.find(".details-top-links .event-details"));
    var $mapTravel = $(element.find(".details-top-links .map-travel"));

    var $stayLocalDrawer = $(element.find(".stay-local-container"));
    var $eventDetailsDrawer = $(element.find(".event-details-container"));
    var $mapTravelDrawer = $(element.find(".map-travel-container"));

    var $window = $(window);
    var $body = $("html, body");

    $eventDetails.click(function () {
        $eventDetailsDrawer.show();
        $body.animate({ scrollTop: $eventDetailsDrawer.offset().top - 200 }, 1000);
    });
    $mapTravel.click(function () {
        $mapTravelDrawer.show();
        $body.animate({ scrollTop: $mapTravelDrawer.offset().top - 30 }, 1000);
    });
    $stayLocal.click(function () {
        $stayLocalDrawer.show();
        $body.animate({ scrollTop: $stayLocalDrawer.offset().top - 200 }, 1000);
    });

    $window.scroll(function() {
        if ($window.scrollTop() === 0) {
            $(".drawer-item").hide();
        }
    });

};