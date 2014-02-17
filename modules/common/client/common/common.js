/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 2/16/14
 * Time: 2:04 PM
 * To change this template use File | Settings | File Templates.
 */

"use strict";
var common = {
    resetBackground : function (element) {
        var $html = $(element.parents()[element.parents().length-1]);
        $html.removeClass('full-content');
        $html.find('.navigation-small-content').removeClass('navigation-full-content');
        $html.find('.container').addClass('small-content');
    },
    resetRegistryBackground : function (element) {
        var $html = $(element.parents()[element.parents().length-1]);
        $html.find('.container').removeClass('small-content');
        $html.find('.navigation-small-content').addClass('navigation-full-content');
        $html.addClass('full-content');
    }
};

module.exports = common;