'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/rsvpLink'),
    templateUrl: '/component/rsvp/rsvpComponent'
  };
};