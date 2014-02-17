'use strict';

module.exports = function () {
    return {
        restrict : 'E',
        replace : true,
        link: require('../links/mapTravelLink'),
        templateUrl: '/component/details/mapTravelDrawer'
    };
};