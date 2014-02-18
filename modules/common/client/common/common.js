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
        $html.find('.nav-item').find('a').css({color: '#999933'});
    },
    resetRegistryBackground : function (element) {
        var $html = $(element.parents()[element.parents().length-1]);
        $html.find('.nav-item').find('a').css({color: '#FFFFFF'});
    }
};

module.exports = common;