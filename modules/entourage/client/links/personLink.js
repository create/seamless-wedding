"use strict";
module.exports = function (scope, element, attrs) {
    var $image = element.find(".image");
    var $window = $(window);

    var $picture;
    var $hoverPicture;

    function setElementClass() {
        element.addClass(attrs.name);
    }
    function setImageSource() {
        var picture = getPicture();
        $image.empty();
        $image.append(picture);
    }
    function setImageHoverSource() {
        var picture = getHoverPicture();
        $image.empty();
        $image.append(picture);
    }
    function prepareImageHover() {
        if (attrs.twoImages === "true") {
            $image.hover(setImageHoverSource, setImageSource);
        }
    }

    function getPicture() {
        if (!$picture) {
            var imagePath = "images/entourage/" + attrs.name + ".png";
            $picture = $("<img />");
            $picture.attr('src', imagePath);
        }
        return $picture;
    }
    function getHoverPicture() {
        if (!$hoverPicture) {
            var imagePath = "images/entourage/" + attrs.name + "Hover.png";
            $hoverPicture = $("<img />");
            $hoverPicture.attr('src', imagePath);
        }
        return $hoverPicture;
    }

    getHoverPicture();
    setElementClass();
    setImageSource();
    prepareImageHover();
};