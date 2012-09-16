/*
	registration module
*/

exports.completeRegistration = function(){
	/*
	user = User()

	user.updateCredentials(parameters['credentials'])
	user.update(parameters['user'])
	user.put()

	result['lock'] = user.lock
	result['result'] = "done"
	*/
/*
	$user = new user();

	updateUserCredentials($parameters["credentials"], $user);
	updateUserData($parameters["user"], $user);
	$user->Save();

	$result["lock"] = $user->lock;
	$result["result"] = "done";
*/

	var result = {};
	var userModule = require('../modules/user');
	var user = userModule.getUser();

	user.updateCredentials(parameters['credentials']);
	user.update(parameters['user']);
	// user.put()
	var db = require('./db').getDb();
	util.log(db.toString());

	result['lock'] = user.lock;
	result['result'] = "done";

	return result;
};