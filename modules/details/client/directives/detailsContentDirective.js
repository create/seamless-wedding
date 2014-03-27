'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/detailsContentLink'),
    scope: {
        next: "@nextSet",
        identifier: "@id",
        lastFull: "@lastItem"
    },
    templateUrl: '/component/details/detailsContentComponent'
  };
};