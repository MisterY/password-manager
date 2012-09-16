/*
	db.js
	Database adapter
	Currently using sqlite. Should be adapted to replace data engine by switching plugins.
*/
var config = {
	database: ":memory:"
};

var demo = function () {
		var sqlite3 = require('sqlite3').verbose();
		var db = new sqlite3.Database(':memory:');

		db.serialize(function () {
			db.run("CREATE TABLE lorem (info TEXT)");

			var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
			for (var i = 0; i < 10; i++) {
				stmt.run("Ipsum " + i);
			}
			stmt.finalize();

			db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
				console.log(row.id + ": " + row.info);
			});
		});

		db.close();
	};

var DbAdapter = function(){
	var driver = require('sqlite3').verbose();
	var db = new driver.Database(config.database);

	var createDb = function(){

	};

	this.save = function(){
		// save something.
	};

	this.toString = function(){
		console.log('sqlite3 db adapter');
	};
};

exports.getDb = function () {
	var dbAdapter = new DbAdapter();
	return dbAdapter;
};