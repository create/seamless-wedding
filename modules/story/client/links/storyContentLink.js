"use strict";
module.exports = function (scope, element, attrs) {
    element.addClass(attrs.id);

    var imagePause = 4000;
    var contentPause = 10000;
    var imageSpeed = 0.1;
    var poemSpeed = 0.4;
    var contentSpeed = 0.4;
    var textSpeed = 0.4;

    var $window = $(window);
    var $body = $("body");
    var $image = element.find('.image');
    var $container = element.find(".container");

    var $headline = $container.find(".headline");
    if (attrs.nextSet) {
      // var headlinePath = "images/story/headline-" + attrs.id + ".png";
      // $headline.append($("<img>").attr('src', headlinePath));
    }

    var $poem = element.find(".poem");
    var $text = element.find(".text");

    var imageScrollTo = $image.offset().top;
    var containerScrollTo = $container.offset().top - container.getTopOffset();
    var nextContainerScrollTo;

    //Add correct image class so we can continue using css to load background images
    var imageClass = attrs.id + "-image";
    $image.addClass(imageClass);

    element.find(".next").click(function (event) {
        var scrollTo;
        var $nextSet = $("." + attrs.nextSet);
        if (!attrs.lastItem) {
            scrollTo = $nextSet.find(".container").offset().top - container.getTopOffset();
        } else {
            scrollTo = $nextSet.find(".image").offset().top;
        }
        $body.animate({ scrollTop: scrollTo}, 3000);
    });

    if ($window.width() > 800) {
        //Prepare parallax
        $image.parallax("50%", imageSpeed);
        $container.parallax("50%", contentSpeed);
        $poem.parallax("50%", poemSpeed, false, 0, "top");
        $text.parallax("50%", textSpeed, false, 0, "bottom");
    }

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

            nextContainerScrollTo = $nextContainer.offset().top - container.getTopOffset();
        }
        return nextContainerScrollTo;
    }

    function setContentPositions() {
        if (attrs.nextSet) {
            $poem.css({right: poem.getRightOffset()});
            $text.css({left : text.getLeftOffset()});
            $headline.css({left : headline.getLeftOffset()});
        }
    }
    setContentPositions();
};

var container = {
    getTopOffset : function () {
        if (!this.topOffset) {
            this.topOffset = (constants.$window.height() - constants.containerHeight) / 3;
        }
        return this.topOffset;
    }
};

var constants = {
    $window : $(window),
    containerHeight : 300,
    smallestSupportedWidth: 1200,
    poemStartRight: 10,
    textStartLeft: 30,
    headlineStartLeft: 10
};

var poem = {
    getRightOffset : function () {
        var additional = (constants.$window.width() - constants.smallestSupportedWidth) / 3;
        var newOffset = constants.poemStartRight + additional;
        return newOffset > constants.poemStartRight ? newOffset : constants.poemStartRight;
    }
};

var text = {
    getLeftOffset : function () {
        var additional = (constants.$window.width() - constants.smallestSupportedWidth) / 3;
        var newOffset = constants.textStartLeft + additional;
        return newOffset > constants.textStartLeft ? newOffset : constants.textStartLeft;
    }
};

var headline = {
    getLeftOffset : function () {
        var additional = (constants.$window.width() - constants.smallestSupportedWidth) / 3;
        var newOffset = constants.headlineStartLeft + additional;
        return newOffset > constants.headlineStartLeft ? newOffset : constants.headlineStartLeft;
    }
};