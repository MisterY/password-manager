
/*
 * GET home page.
 */

exports.index = function(req, res){
	// Check which version to serve.
	res.redirect('../index.html');
};

/*
 * POST index
 */
exports.index_post = function(req, res){
	var util = require('util');

	// var param_echo = require('../modules/read_params.js');
	// param_echo.display_params(req);

	var result = {};

	var method = req.param('method', null);
	var parameters = req.param('parameters', null);

	switch(method){
		case "registration":
		util.log('registration');
		break;
		
		case "handshake":
		util.log('handshake');
		var handshake_handler = require('../modules/handshake.js');
		handshake_handler.handle(req, res);
		break;

		case "message":
		util.log('message');
		break;

		case "logout":
		util.log("logout");
		break;

		default:
		util.log("default");
		result.result = parameters;
		break;
	}

	// res.render('index', { title: 'Clipperz Community Edition', text: text });
	var finalResult = {
		"result": result
	};
	res.send(finalResult);
	util.log("finalResult: " + finalResult);
};
