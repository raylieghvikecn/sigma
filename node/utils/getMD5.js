var obj2md5 = require('./obj2md5.js');

module.exports = function(obj, map, callback, othercall) {
	md5 = obj2md5(obj)
	if(map[md5] == undefined) {
		callback(md5);
	} else {
		othercall(md5);
	}
}