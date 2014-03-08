"use strict";
module.exports = function (scope, element, attrs) {
    element.addClass(attrs.id);

    var imagePause = 2000;
    var contentPause = 5000;
    var imageSpeed = 0.1;
    var poemSpeed = 0.6;
    var contentSpeed = 0.4;
    var textSpeed = 0.1;

    var $body = $("body");
    var $image = element.find('.image');
    var $container = element.find(".container");
    var $poem = element.find(".poem");
    var $text = element.find(".text");

    var imageScrollTo = $image.offset().top;
    var containerScrollTo = $container.offset().top - 120;
    var nextContainerScrollTo;

    //Add correct image class so we can continue using css to load background images
    var imageClass = attrs.id + "-image";
    $image.addClass(imageClass);
    
    element.find(".next").click(function (event) {
        var scrollTo;
        var $nextSet = $("." + attrs.nextSet);
        if (!attrs.lastItem) {
            scrollTo = $nextSet.find(".container").offset().top - 120;
        } else {
            scrollTo = $nextSet.find(".image").offset().top;
        }
        $body.animate({ scrollTop: scrollTo}, 3000);
    });

    //Prepare parallax
    $image.parallax("50%", imageSpeed);
    $container.parallax("50%", contentSpeed);
    $poem.parallax("50%", poemSpeed, false, 0);
    $text.parallax("50%", textSpeed, false, 0, true);

    scope.$on("PlayAnimation-" + attrs.id, function (event, data) {
        return scope.fullVersion ? fullAnimation(data) : shortAnimation(data);
    });

    function fullAnimation(data) {
        scrollToNext(imageScrollTo).then(function () {
            return wait(imagePause);
        }).then(function () {
            return scrollToNext(containerScrollTo);
        }).then(function () {
            return wait(contentPause);
        }).then(function () {
            data.callback(attrs.id);
        });
    }
    function shortAnimation(data) {
        scrollToNext(imageScrollTo).then(function () {
            data.callback(attrs.id);
        });
    }

    function scrollToNext(scrollTo) {
        var defer = $.Deferred();

        $body.animate({ scrollTop: scrollTo}, 2000, "swing", function () {
            defer.resolve();
        });

        return defer.promise();
    }
    function wait(time) {
        var defer = $.Deferred();

        setTimeout(function () {
            defer.resolve();
        }, time);

        return defer.promise();
    }
    function getNextContainerScrollTo() {
        if (!nextContainerScrollTo) {
            var $nextSet = $("." + attrs.nextSet);
            var $nextImage = $nextSet.find(".image");
            var $nextContainer = $nextSet.find(".container");

            nextContainerScrollTo = $nextContainer.offset().top - 120;
        }
        return nextContainerScrollTo;
    }
};