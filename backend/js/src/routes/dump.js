/*
*/

exports.index = function(req, res){
	res.header("Content-Type", "text/cache-manifest");

	res.end("CACHE MANIFEST")
	// res.send("alles klar");
};