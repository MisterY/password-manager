/*
*/
/*
class User(db.Model):
	username	= db.StringProperty()
	srp_s		= db.StringProperty()
	srp_v		= db.StringProperty()
	header		= db.TextProperty()
	statistics	= db.TextProperty()
	auth_version= db.StringProperty()
	version		= db.StringProperty()
	lock		= db.StringProperty()
	
	def updateCredentials(self, someCredentials):
		self.username		= someCredentials['C']
		self.srp_s			= someCredentials['s']
		self.srp_v			= someCredentials['v']
		self.auth_version	= someCredentials['version']

	def update(self, someData):
		self.header		= someData['header']
		self.statistics	= someData['statistics']
		self.version	= someData['version']
		self.lock		= someData['lock']
*/

function User(){
	this.username	= "";
	this.srp_s		= "";
	this.srp_v		= "";
	this.header		= "";
	this.statistics	= "";
	this.auth_version	= "";
	this.version	= "";
	this.lock		= "";

	this.updateCredentials = function(someCredentials){ 
		util.log(someCredentials);
	};

	this.update = function(someData){
		util.log(someData);
	};
};
User.prototype.getColour2 = function(){
	return this.colour;
};

exports.getUser = function(){
	var user = new User();
	return user;
};