/*
 * handshake handler for /index, POST
 */

exports.handle = function(req, res){
	var method = req.param('method', null);
	var parameters = req.param('parameters', null);

	var message = parameters['message'];

	switch(message)	{
		case "connect":

		break;

		case "credentialCheck":
		break;

		case "oneTimePassword":
		break;

		default:
			throw "Unsupported message!";
		break;
	}

	res.send('alles klar');
};

var connect = function(){
	
};