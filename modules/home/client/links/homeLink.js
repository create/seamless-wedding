"use strict";

module.exports = function (scope, element, attrs) {
  //Get top level html tag
  var $html = $(element.parents()[element.parents().length-1]);
  $html.removeClass('full-content');
  $html.find('.navigation-small-content').removeClass('navigation-full-content');
  $html.find('.container').addClass('small-content');
};