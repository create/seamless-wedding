
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log("PATH: " + req.path);
  console.log("INDEX");
  res.render('index');
};

exports.love = function (req, res) {
  var name = req.params.name;
  console.log("NAME: " + name);
  res.render('partials/' + name);
};