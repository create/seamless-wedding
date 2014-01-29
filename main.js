/**
 * Module dependencies
 */
var express = require('express'),
  routes = require('./modules/main/server'),
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
