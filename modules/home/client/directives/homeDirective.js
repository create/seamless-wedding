'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: function (scope, element, attrs) {
      //Get top level html tag
      var $html = $(element.parents()[element.parents().length-1]);
      $html.removeClass('container-registry');
      $html.find('.container').show();
    },
    templateUrl: '/component/home/homeComponent'
  };
};