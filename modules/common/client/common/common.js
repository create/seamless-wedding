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
        $html.find('.nav-item').find('a').css({color: '#333'});
    },
    resetRegistryBackground : function (element) {
        var $html = $(element.parents()[element.parents().length-1]);
        $html.find('.nav-item').find('a').css({color: '#FFFFFF'});
    },
    resetScroll: function (element) {
        var $html = $(element.parents()[element.parents().length-1]);
        $html.find('body').css({backgroundAttachment: 'scroll'});
    },
    resetFixed: function (element) {
        var $html = $(element.parents()[element.parents().length-1]);
        $html.find('body').css({backgroundAttachment: 'fixed'});
    }
};

module.exports = common;