'use strict';

var mongoose = require('mongoose');
var Rsvp = mongoose.model('Rsvp');
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "useremail@gmail.com",
        pass: "userpass"
    }
});
var lastnamelist = ["pyke", "oscar", "obama"];

exports.index = function(req, res) {
    var modulePath = "../modules/main/client/view/index";
    res.render(modulePath);
};

exports.moduleViews = function (req, res) {
    var moduleName = req.originalUrl;
    var modulePath = "../modules" + moduleName + "/client/view" + moduleName;
    console.log("modulePath: " + modulePath);
    res.render(modulePath);
};

exports.componentViews = function (req, res) {
  var componentName = req.params.component;
  var moduleName = req.params.module;
  var modulePath = "../modules/" + moduleName + "/client/view/component/" + componentName;
  console.log("modulePath: " + modulePath);
  res.render(modulePath);
};

exports.getAllRsvps = function(req, res) {
    Rsvp.find({"guestbook" : true}, function(err, result) {
        if (!err) {
            return res.json({'rsvps': result});
        } else {
            res.json({'Error': 'Something went wrong'});
        }
    });
};

exports.getAllRsvpInfo = function(req, res) {
  if (req.query.password == "gethitched") {
    Rsvp.find({}, function(err, result) {
        if (!err) {
            return res.json({'rsvps': result});
        } else {
            res.json({'Error': 'Something went wrong'});
        }
    });
  } else {
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    res.json({'Error': "Wrong password."});
  }
  
}
function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i].toLowerCase() === obj.toLowerCase()) {
           return true;
       }
    }
    return false;
}

exports.addRsvp = function(req, res) {
  var lastname = req.body.uname.toLowerCase().split(" ");
  lastname = lastname[lastname.length - 1];

  if (!contains(lastnamelist, lastname)) {
    return res.json({'Error': 'Your name is not on the guestlist. If you believe this is in error, please contact us.'});
  }
  var newRsvp = new Rsvp({
    "name": req.body.uname,
    "attending": req.body.attending,
    "guests": req.body.guests,
    "song": req.body.song,
    "message": req.body.message,
    "guestbook": req.body.guestbook,
    "email": req.body.email,
    "phone": req.body.phone,
    "zipcode": req.body.zipcode
  });
  console.log(newRsvp);
  newRsvp.save(function(err) {
    if (!err) {
      return console.log('created rsvp');
    } else {
      return console.log(err);
    }
  });
  var songSentence = "";
  if (req.body.song) {
     songSentence = " Don't forget to practice your dance moves for " + req.body.song + "!";
  }
  var seatSent = "a seat";
  if (parseInt(req.body.guests) > 1) {
    seatSent = req.body.guests + " seats";
  }

  var mailOptions = {
    from: "Mackenzie and Jonathan Pyke <rsvpyke@gmail.com>", // sender address
    to: req.body.email, // list of receivers
    subject: "M+J Wedding RSVP Confirmation", // Subject line
    text: req.body.uname+", We look forward to seeing you on our wedding day! We will be saving "+seatSent+" for you, and can't wait to celebrate together."+songSentence+" Please find the venue address and directions by visiting the following link: https://goo.gl/maps/mKwEA", // plaintext body
    html: '<div style="text-align: center; color: #333; font-family: HelveticaNeue, sans-serif;font-size: 18px;font-weight: 100;max-width: 600px;margin-left:auto;margin-right:auto;"><div style="padding: 20px;border-radius:5px; background: lightblue;"><h1 style="color: #ffffff; font-weight: 100;font-size:34px;margin: 5px;">Mackenzie and Jonathan\'s Wedding</h1></div>'+
    '<img style="margin-top: 10px; border-radius: 5px;" src="http://pyke.us/images/email/rsvp-header.jpg"/><div style="padding-left: 20px;padding-right:20px; text-align:left;"><p>'+req.body.uname+',</p><p>We look forward to seeing you on our wedding day! We will be saving '+seatSent+' for you, and can\'t wait to celebrate together.<br>'+songSentence+'<br><br>Please find the venue address and directions by clicking on the map below.</p></div>'+
    '<a href="https://goo.gl/maps/mKwEA" target="_blank"><img style="border-radius: 5px;" src="http://pyke.us/images/email/map.png"/></a>'+
  '<div style="border-radius:5px;background: lightblue; color: #999;padding: 5px; height: 20px;margin-top: 10px;"><p>Don\'t hesitate to reply with any questions or concerns!</p></div></div>' // html body
  }
  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
      }else{
          console.log("Message sent: " + response.message);
      }

      // if you don't want to use this transport object anymore, uncomment following line
      //smtpTransport.close(); // shut down the connection pool, no more messages
  });

  return res.send(newRsvp);
};
