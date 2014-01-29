'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: function (scope, element, attrs) {
      //Get top level html tag
      var $html = $(element.parents()[element.parents().length-1]);
      $html.find('.container').hide();
      $html.addClass('container-registry');
    },
    templateUrl: '/component/registry/registryComponent'
  };
};