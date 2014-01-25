
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log("PATH: " + req.path);
  console.log("INDEX");
  res.render('index');
};

exports.about = function(req, res){
    res.render('../modules/about/client/view/about');
};

exports.moduleViews = function (req, res) {
  var reqLocation = req.originalUrl.replace(/^\/([^\/]+)\/([^\/]+)/,"/$1/$2/client");
  console.log("ORIGINAL: " + req.originalUrl);
  console.log("REPLCE: " + reqLocation);
  res.render(".." + reqLocation);
};