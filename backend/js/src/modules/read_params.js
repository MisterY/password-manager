exports.display_params = function(req){
		var url = require('url');
	var qs = require('querystring');

	if(req.method=='POST') {
		var body = '';
		req.on('data', function(data){
			body += data;
		});
		req.on('end', function(){
			var POST = qs.parse(body);
			console.log('post: ');
			console.log(POST);
		});
	} else if(req.method=='GET'){
		var url_parts = url.parse(req.url, true);
		console.log('get: ');
		console.log(url_parts.query);
	}

	// BUT, with express this is much easier:
	var email = req.param('email', null);  // second parameter is default
};