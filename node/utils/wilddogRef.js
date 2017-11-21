var wilddog = require('wilddog');

var config = {
	syncURL: "https://helloworldsigma33.wilddogio.com"
};
wilddog.initializeApp(config);

module.exports = wilddog.sync().ref();