"use strict";

module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetBackground(element);
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

    $('#extrainfo .extrareq').prop("required", true);
    $("#rsvp-form").submit(function(e) {
        $('#submitbt').attr('disabled','disabled');
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
            success: function(data) {
                if (data.Error) {
                    alert("Your name is not on the guestlist. If you believe this is in error, please contact us.");
                } else {
                    console.log("success");
                    location.reload();
                }  
            },
            error: function(data) {
                alert("Your name is not on the guestlist. If you believe this is in error, please contact us.");
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
