'use strict';

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