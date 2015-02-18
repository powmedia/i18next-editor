
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config');


var app = express();


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


//Routes
app.get('/', routes.index);
app.get('/new', routes.new);
app.post('/', routes.create);
app.get('/:id', routes.edit);
app.post('/:id', routes.update);


//Connect to MongoDB
mongoose.connect(config.db.url, config.db.connect, function(err) {
  if (err) throw err;
});

//Start
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
