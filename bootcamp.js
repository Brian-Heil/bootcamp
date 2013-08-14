// VARIABLE SETUP

module.exports = function() {

  var express = require('express');
  
  var app = express();

  app.configure('development', function(){
    app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
  	app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8000);
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.configure('production', function(){
  	app.set('port', process.env.PORT || 80);
    app.use(express.errorHandler());
  });

  app.use(function(req,res,next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    next();
  });
  
  app.configure(function(){
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use('/demo',express.static(__dirname + '/demo'));
    app.use('/exercises',express.static(__dirname + '/exercises'));
    app.use('/reference',express.static(__dirname + '/reference'));
  });
  
  app.options('*',function(req, res, next) {
    res.send(200);
  });
  
  // ROUTES
  app.get('/api',function(req,res) {
  	if (req.query.length === 0) {
		return res.send(500,'No data received');	  	
  	} else {
		json = {
			'status': 'Success',
			'message': 'Get data received, not secure but received',
			'data': req.query
		};
		return res.json(json);
	}
  });
  
  app.post('/api',function(req,res) {
  	if (req.body.length === 0) {
		return res.send(500,'No data received');	  	
  	} else {
		json = {
			'status': 'Success',
			'message': 'Post data received',
			'data': req.body	
		};
		return res.json(json);
  	}
  });
	  
  return app;
};