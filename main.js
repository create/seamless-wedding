/**
 * Module dependencies
 */
var express = require('express'),
  http = require('http'),
  fs = require('fs'),
  path = require('path'),
  mongoose = require('mongoose'),
  _ = require('lodash');

var app = module.exports = express();

var db = require('./db/db');

var routes = require('./modules/main/server');

/**
* Configuration
*/

// all environments
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
   app.use(express.errorHandler());
};

// production only
if (app.get('env') === 'production') {
  // TODO
};

app.get('/', routes.index);
app.get('/component/:module/:component', routes.componentViews);
app.get('/get/rsvps/', routes.getAllRsvps);
app.get('/get/rsvpinfo/', routes.getAllRsvpInfo);
app.post('/add/rsvp', routes.addRsvp);

_.forEach(fs.readdirSync("./modules/"), function (moduleName) {
    var modulePath = "/" + moduleName;
    var componentPath = modulePath + "/:component";
    app.get(modulePath, routes.moduleViews);
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
