'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/galleryLink'),
    templateUrl: '/component/gallery/galleryComponent'
  };
};