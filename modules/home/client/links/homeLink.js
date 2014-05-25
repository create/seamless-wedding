"use strict";

module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetRegistryBackground(element);
    common.resetFixed(element);
};