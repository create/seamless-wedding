var animation =  {
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

module.exports = animation;
