var obj2md5 = require('./obj2md5.js');

module.exports = function (arr) {
	var map = {};
	var array = [];
	for(var i=0; i<arr.length; i++) {
		var md5 = obj2md5(arr[i])
		if(map[md5] == undefined) {
			map[md5] = i;
			array.push(arr[i]);
		}
	}
	return {map, array};
}