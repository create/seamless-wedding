/**
 * Module dependencies
 */
var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  fs = require('fs'),
  path = require('path'),
  _ = require('lodash');

var app = module.exports = express();

/**
* Configuration
*/

// all environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
app.use(express.static('modules/about/client/view/about'));

// development only
if (app.get('env') === 'development') {
   app.use(express.errorHandler());
};

// production only
if (app.get('env') === 'production') {
  // TODO
};

app.get('/', routes.index);
app.get('/about', routes.about);

_.forEach(fs.readdirSync("./modules/"), function (moduleName) {
    var serverModulePath = "./modules/" + moduleName + "/server";
    var moduleNamePath = "/modules/" + moduleName;
    var module;
    if (fs.existsSync(serverModulePath)) {
        module = require(serverModulePath);
    }

    if (fs.existsSync(moduleNamePath + "/client/view")) {
        console.log(moduleNamePath + "/client/view");
        app.use(moduleNamePath, express.static(moduleNamePath + "/client"));
        app.get(moduleNamePath + "/client/view/*", routes.moduleViews);
    }
});

/**
* Start Server
*/
try {
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
} catch (error) {
   console.log(error);
}
