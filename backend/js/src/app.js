/*
 *  Clipperz Community Edition.
 *  Server-side implementation in JavaScript, running under node.js
 */
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , dump = require('./routes/dump')
//  , xhr = require('./routes/xhr')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  // 
  app.use("/beta", express.static(__dirname + '/beta'));
  app.use("/gamma", express.static(__dirname + '/gamma'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/users', user.list);
app.get('/dump', dump.index);
// app.get('/xhr', xhr.index);

app.post('/index', routes.index_post);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
