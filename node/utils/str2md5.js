// 将Object和Array转为md5

var crypto = require('crypto');

module.exports = function(str) {
    var md5 = crypto.createHash('md5');
    return md5.update(str).digest('hex');
}