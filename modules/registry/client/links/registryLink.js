"use strict";

module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetRegistryBackground(element);
    common.resetFixed(element);

    $.get("/get/rsvps/", function (data, status) {
        for (var i = 0; i < data.rsvps.length; i++) {
            if (data.rsvps[i].name != undefined && data.rsvps[i].message != undefined && data.rsvps[i].message !== "") {
                var name = data.rsvps[i].name;
                console.log("printing rsvp: " + name);
                var message = data.rsvps[i].message;

                $('#rsvps').prepend("<q>" + message + "</q><p class='attribution'>" + name + "</p>");
            }
        }
    });
};