/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 3/8/14
 * Time: 10:37 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

module.exports = function () {
    return {
        restrict : 'E',
        replace : true,
        link: require('../links/personLink'),
        scope: {  },
        templateUrl: '/component/entourage/person'
    };
};
