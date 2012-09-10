/*
 * handshake handler for /index, POST
 */

exports.handle = function(req, res){
	var method = req.param('method', null);
	var parametersString = req.param('parameters', null);
	var parametersContainer = JSON.parse(parametersString);
	var parameters = parametersContainer.parameters;

	var message = parameters['message'];

	switch(message)	{
		case "connect":
			connect(req.session, parameters);
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

var connect = function(session, parameters){

	session.C = parameters['parameters']['C']
	session.A = parameters['parameters']['A']
	// console.log("session.C = " + session.C);

	// var user = db.Query(User).filter('username =', session.C).get()
	var user = { "username": "user" };

};