'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/entourageLink'),
    templateUrl: '/component/entourage/entourageComponent'
  };
};