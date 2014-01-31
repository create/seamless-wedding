"use strict";

module.exports = function (scope, element, attrs) {
  //Get top level html tag
  var $html = $(element.parents()[element.parents().length-1]);
  $html.find('.container').removeClass('small-content');
  $html.find('.navigation-small-content').addClass('navigation-full-content');
  $html.addClass('full-content');
};