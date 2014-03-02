"use strict";
module.exports = function (scope, element, attrs) {
    var $document = $(document);
    $document.ready(function(){
        var imageSpeed = 0.1;
        var poemSpeed = 0.5;
        var contentSpeed = 0.4;

        var $body = $("body");

        var $oneContent = $("#one-content");
        var $twoContent = $("#two-content");
        var $threeContent = $("#three-content");
        var $fourContent = $("#four-content");
        var $fiveContent = $("#five-content");
        var $sixContent = $("#six-content");

        var $oneImage = $("#one-image");
        var $twoImage = $("#two-image");
        var $threeImage = $("#three-image");
        var $fourImage = $("#four-image");
        var $fiveImage = $("#five-image");
        var $sixImage = $("#six-image");
        var $sevenImage = $("#seven-image");

        var $content = {
            oneContent : $oneContent.offset().top - 120,
            oneImage : $oneImage.offset().top,
            twoContent : $twoContent.offset().top - 120,
            twoImage : $twoImage.offset().top,
            threeContent : $threeContent.offset().top - 120,
            threeImage : $threeImage.offset().top,
            fourContent : $fourContent.offset().top - 120,
            fourImage : $fourImage.offset().top,
            fiveContent : $fiveContent.offset().top - 120,
            fiveImage : $fiveImage.offset().top,
            sixContent : $sixContent.offset().top - 120,
            sixImage : $sixImage.offset().top,
            sevenImage : $sevenImage.offset().top
        };

        $(".next").click(function (event) {
            var nextElement = $(event.target).data().next;
            var scrollTo = nextElement === "seven" ? $content[nextElement+"Image"] : $content[nextElement+"Content"];
            $body.animate({ scrollTop: scrollTo}, 3000);
        });

        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
        $('#one-image').parallax("50%", imageSpeed);
        $('#one-content').parallax("50%", contentSpeed);
        $('#one-content').find(".poem").parallax("50%", poemSpeed, false, 0);

        $('#two-image').parallax("50%", imageSpeed);
        $('#two-content').parallax("50%", contentSpeed);
        $('#two-content').find(".poem").parallax("50%", poemSpeed, false, 0);

        $('#three-image').parallax("50%", imageSpeed);
        $('#three-content').parallax("50%", contentSpeed);
        $('#three-content').find(".poem").parallax("50%", poemSpeed, false, 0);

        $('#four-image').parallax("50%", imageSpeed);
        $('#four-content').parallax("50%", contentSpeed);
        $('#four-content').find(".poem").parallax("50%", poemSpeed, false, 0);

        $('#five-image').parallax("50%", imageSpeed);
        $('#five-content').parallax("50%", contentSpeed);
        $('#five-content').find(".poem").parallax("50%", poemSpeed, false, 0);

        $('#six-image').parallax("50%", imageSpeed);
        $('#six-content').parallax("50%", contentSpeed);
        $('#six-content').find(".poem").parallax("50%", poemSpeed, false, 0);

        $('#seven-image').parallax("50%", imageSpeed);

        animation.wait(2000).then(function () {
            animation.execute($content, $body);
        });

    });
};

var animation = {
    imagePause: 2000,
    contentPause: 5000,

    execute: function ($content, $body) {
        this.scrollToNext($content.oneContent, $body).then(function () {
            return this.wait(this.contentPause);
        }.bind(this)).then(function () {
            return this.scrollToNext($content.twoImage, $body);
        }.bind(this)).then(function () {
            return this.wait(this.imagePause);
        }.bind(this))

        .then(function () {
            return this.scrollToNext($content.twoContent, $body);
        }.bind(this)).then(function () {
            return this.wait(this.contentPause);
        }.bind(this)).then(function () {
            return this.scrollToNext($content.threeImage, $body);
        }.bind(this)).then(function () {
            return this.wait(this.imagePause);
        }.bind(this))

        .then(function () {
            return this.scrollToNext($content.threeContent, $body);
        }.bind(this)).then(function () {
            return this.wait(this.contentPause);
        }.bind(this)).then(function () {
            return this.scrollToNext($content.fourImage, $body);
        }.bind(this)).then(function () {
            return this.wait(this.imagePause);
        }.bind(this))

        .then(function () {
            return this.scrollToNext($content.fourContent, $body);
        }.bind(this)).then(function () {
            return this.wait(this.contentPause);
        }.bind(this)).then(function () {
            return this.scrollToNext($content.fiveImage, $body);
        }.bind(this)).then(function () {
            return this.wait(this.imagePause);
        }.bind(this))

        .then(function () {
            return this.scrollToNext($content.fiveContent, $body);
        }.bind(this)).then(function () {
            return this.wait(this.contentPause);
        }.bind(this)).then(function () {
            return this.scrollToNext($content.sixImage, $body);
        }.bind(this)).then(function () {
            return this.wait(this.imagePause);
        }.bind(this))

        .then(function () {
            return this.scrollToNext($content.sixContent, $body);
        }.bind(this)).then(function () {
            return this.wait(this.contentPause);
        }.bind(this)).then(function () {
            return this.scrollToNext($content.sevenImage, $body);
        }.bind(this));
    },
    scrollToNext: function (scrollTo, $body) {
        var defer = $.Deferred();

        $body.animate({ scrollTop: scrollTo}, 2000, "swing", function () {
            defer.resolve();
        });

        return defer.promise();
    },
    wait: function (time) {
        var defer = $.Deferred();

        setTimeout(function () {
            defer.resolve();
        }, time);

        return defer.promise();
    }
};