var obj2md5 = require('./obj2md5.js');

module.exports = function (arr) {
	var data = {};
	for(var i=0; i<arr.length; i++) {
		var temp = "";
		for (var key in arr[i]) {
			temp += arr[i][key];
		}
		var md5 = obj2md5(temp);
		data[md5] = arr[i];
	}
	return data;
}