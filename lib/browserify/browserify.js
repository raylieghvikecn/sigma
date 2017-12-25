var crypto = require('crypto');
function str2md5(str) {
    var md5 = crypto.createHash('md5');
    return md5.update(str).digest('hex');
}
function obj2md5(obj) {
	var str = JSON.stringify(obj);
	return str2md5(str);
}
