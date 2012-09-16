
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
	// parse JSON
	parameters = JSON.parse(parameters);
	var message = parameters['parameters']['message'];

	switch(method){
		case "registration":
			util.log('registration');
			if(message === "completeRegistration"){
				var registration = require('../modules/registration.js')(parameters);
				registration.completeRegistration();
			}
		break;
		
		case "handshake":
			util.log('handshake');
			var handshake_handler = require('../modules/handshake.js');
		
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
	res.send(JSON.stringify(finalResult));
	util.log("finalResult: " + finalResult);
};
