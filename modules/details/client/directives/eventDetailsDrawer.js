'use strict';

module.exports = function () {
    return {
        restrict : 'E',
        replace : true,
        link: require('../links/eventDetailsLink'),
        templateUrl: '/component/details/eventDetailsDrawer'
    };
};