'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/registryLink'),
    templateUrl: '/component/registry/registryComponent'
  };
};