"use strict";

module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetBackground(element);
    common.resetFixed(element);
    $('#extrainfo .extrareq').prop("required", true);
    $("#rsvp-form").submit(function(e) {
        var guestnum = $('#guests').val();
        if (guestnum == 4) { // family
            var newNum = $('#guestnum').val();
            if (newNum) {
                guestnum = newNum;
            }
        }
        var guestbook = false;
        if ($('#guestbook').val() > 0) {
            guestbook = true;
        }
        var formData = {
            "uname": $('#uname').val(),
            "attending": $('#attending').val(),
            "guests": guestnum,
            "song": $('#song').val(),
            "message": $('#message').val(),
            "guestbook": guestbook,
            "email": $('#email').val(),
            "phone": $('#phone').val(),
            "zipcode": $('#zipcode').val()
        };

        console.log(formData);

        $.ajax({
            type: "POST",
            url: "/add/rsvp",
            data: formData,
            success: function() {
                window.location.href = "/#/registry";
            }
        });
        return false;
    });
    $('#guests').change(function(e) {
        var guestnum = $('#guestnum');
        if ($('#guests').val() == 4) {
            $('#numberguest').show();
            guestnum.prop("required", true);
        } else {
            $('#numberguest').hide();
            guestnum.removeProp("required");
        }
    });
    $('#attending').change(function(e) {
        var extrainfo = $('#extrainfo');
        if ($('#attending').val() == 0) {
            extrainfo.hide();
            $('#extrainfo .extrareq').removeProp("required");
        } else {
            extrainfo.show();
            $('#extrainfo .extrareq').prop("required", true);
        }
    });
    
};
