'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/homeLink'),
    templateUrl: '/component/home/homeComponent'
  };
};