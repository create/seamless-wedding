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
        $html.find('.nav-item').find('a').css({"text-shadow": '0 0 5px #fff;'});
        $('body').css({background: 'url(/images/main/main-bg.jpg'});
        $('.navigation').css({'background': "url('../images/main/bg-texture.png')",
    'box-shadow': '0px 0px 5px #727272'});
    },
    resetHomeBackground : function (element) {
        var $html = $(element.parents()[element.parents().length-1]);
        $html.find('.nav-item').find('a').css({color: '#FFFFFF'});
        $html.find('.nav-item').find('a').css({"text-shadow": '0 0 5px #111;'});
        $('body').css({background: 'url(/images/home/bg-home.jpg'});
        $('.navigation').css({'background': "transparent", 'box-shadow': 'none'});
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