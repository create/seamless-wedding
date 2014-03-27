'use strict';

var mongoose = require('mongoose');
var Rsvp = mongoose.model('Rsvp');

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
    Rsvp.find({}, function(err, all) {
        if (!err) {
            res.json({'rsvps': all});
        } else {
            res.json({'Error': 'Something went wrong'});
        }
    });
};

exports.addRsvp = function(req, res) {
  var newRsvp = new Rsvp({
    "name": req.body.uname,
    "attending": req.body.attending,
    "guests": req.body.guests,
    "song": req.body.song,
    "message": req.body.message,
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
  return res.send(newRsvp);
};