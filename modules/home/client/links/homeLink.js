"use strict";

module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetHomeBackground(element);
    common.resetFixed(element);
};