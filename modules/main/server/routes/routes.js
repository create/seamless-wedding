'use strict';

var mongoose = require('mongoose');
var Rsvp = mongoose.model('Rsvp');
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "useremail",
        pass: "userpass"
    }
});
var lastnamelist = [
"Bonnell"
,"Botz"
,"Brooks"
,"Cloes"
,"Cottrell"
,"Coulter"
,"Davenport"
,"Davey"
,"David"
,"David"
,"David"
,"Davidson"
,"Davis"
,"Decker"
,"Dedrickson"
,"DeVries"
,"DeVries"
,"Dickleman"
,"Dromensk"
,"Drotning"
,"Edds"
,"Edwards"
,"Giurgevich"
,"Graham"
,"Grimstad"
,"Guthrie"
,"Habich"
,"Habich"
,"Habich"
,"Habouski"
,"Hamann"
,"Harrison"
,"Hartness"
,"Haynes"
,"Healey"
,"Hyde"
,"Johnson"
,"Karpack"
,"Karpack"
,"Kehm"
,"Kim"
,"King"
,"Kirby"
,"Kosmin"
,"Kosmin"
,"Larson"
,"Mangan"
,"McCormick"
,"McDevitt"
,"McHugh"
,"Merson"
,"Mesler"
,"Moore"
,"Morris"
,"Mulholland"
,"Mulholland"
,"Navarro"
,"Nordstrom"
,"Oehlschlaeger-Browne"
,"Oscar"
,"Oscar"
,"Palmer"
,"Papke"
,"Perry"
,"Peterman"
,"Pier"
,"Ponten"
,"Ponti-Sgargi"
,"Pyke"
,"Pyke"
,"Pyke"
,"Pyke"
,"Pyke"
,"Pyke"
,"Pyke"
,"Pyke"
,"Robinett"
,"Robledo"
,"Sanders"
,"Saul"
,"Setter"
,"Shanahan"
,"Shanahan"
,"Shanahan"
,"Shanahan"
,"Shipek"
,"Shiraishi"
,"Smith"
,"Smith"
,"Stead"
,"Sturtevant"
,"Sutton"
,"Thompson"
,"Tompkins"
,"Valentine"
,"Waddell"
,"Waddell"
,"Wageman"
,"Westmorland"
,"Wilke"
,"Williams"
,"Wilson"
,"Wraspir"
,"Young"
,"Young"
,"Young"
,"Young"
];


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
    text: req.body.uname+", We look forward to seeing you on our wedding day! We will be saving "+seatSent+" for you, and can't wait to celebrate together. Please find the venue location by visiting the following link: https://goo.gl/maps/N5281", // plaintext body
    html: '<div style="text-align: center; color: #333; font-family: HelveticaNeue, sans-serif;font-size: 18px;font-weight: 100;max-width: 600px;margin-left:auto;margin-right:auto;"><div style="padding: 20px;border-radius:5px; background: rgb(100,200,215);"><h1 style="color: #ffffff; font-weight: 100;font-size:34px;margin: 5px;">Mackenzie and Jonathan\'s Wedding</h1></div>'+

    '<img style="margin-top: 10px; border-radius: 5px;" src="http://pyke.us/images/email/rsvp-header.jpg"/><div style="padding-left: 20px;padding-right:20px; text-align:left;"><p>'+req.body.uname+',</p><p>We look forward to seeing you on our wedding day! We will be saving '+seatSent+' for you, and can\'t wait to celebrate together.<br><br>Please find the venue location by clicking on the map below.<br>Remember to leave plenty of extra time for the ferry crossing as it is often backed up on summer weekends.<br>We want you to enjoy your time with us, so we recommend you bring a sweater and not wear heels as this on the oceanfront in the great Pacific Northwest.<br><br>An additional e-mail will be sent one week prior to the wedding with more information regarding parking and/or shuttle services.</p></div>'+

    '<a href="https://goo.gl/maps/N5281" target="_blank"><img style="border-radius: 5px;" src="http://pyke.us/images/email/map.png"/></a>'+
  '<div style="border-radius:5px;background: rgb(100,200,215); color: #ffffff;padding: 5px; height: 20px;margin-top: 10px;"><p>Don\'t hesitate to reply with any questions or concerns!</p></div></div>' // html body
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
