var str2md5 = require('./str2md5.js');

module.exports = function(obj) {
	var temp = "";
	for (var key in obj) {
		temp += obj[key] + "";
	}
	return str2md5(temp);
}