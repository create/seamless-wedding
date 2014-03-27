'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/detailsLink'),
    templateUrl: '/component/details/detailsComponent'
  };
};