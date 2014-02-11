"use strict";

module.exports = function (scope, element, attrs) {
    var $stayLocal = $(element.find('.stay-local'));
    var $eventDetails = $(element.find('.event-details'));
    var $mapTravel = $(element.find('.map-travel'));

    var $stayLocalDrawer = $(element.find('.stay-local-drawer'));
    var $eventDetailsDrawer = $(element.find('.event-details-drawer'));
    var $mapTravelDrawer = $(element.find('.map-travel-drawer'));

    var $openDrawer = $(element.find('.open-drawer'));

    var $masterDrawer = $(element.find('.details-master-drawer'));
    var $testFoo = $(element.find('.test-foo'));

    $stayLocal.click(function () {
        //clickHandler.executeClick($stayLocalDrawer);
        $masterDrawer.height('1000px');
        $('html').animate({ scrollTop: $(document).height() }, 1000, function () {
            $testFoo.css({

                'x': '-2000px',
                'top': '1000px'
            });
            $testFoo.show();
            $testFoo.animate({
                'x': '200px'
            }, 5000);
        });
    });
    $eventDetails.click(function () {
        clickHandler.executeClick($eventDetailsDrawer);
    });
    $mapTravel.click(function () {
        clickHandler.executeClick($mapTravelDrawer);
    });
};

var clickHandler = {
    executeClick: function ($drawer) {
        this.closeDrawer().done(function () {
            this.openDrawer($drawer);
        }.bind(this));
    },
    openDrawer: function ($drawer) {
        this.$currentOpenDrawer = $drawer;
        $drawer.show().css({
            x: -1000
        }).animate({
                x: 200
            }, 5000);
    },
    closeDrawer: function () {
        var deferred = $.Deferred();
        /*this.$currentOpenDrawer ? this.$currentOpenDrawer.animate({
            x: 2000
        }, 5000) : deferred.resolve();*/
        deferred.resolve();
        return deferred.promise();
    }
};