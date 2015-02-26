var express = require("express");
var app = express();

require('./router/main')(app); // add main.js and pass app to it

app.set('views', __dirname + '/views'); // tell server where html files live

app.set('view engine', 'ejs'); // set view engine to ejs, which is responsible for rendering html

app.engine('html', require('ejs').renderFile); // tells server to render html files via ejs

var server = app.listen(3000, function() {
	console.log("Started server on port 3000");
});