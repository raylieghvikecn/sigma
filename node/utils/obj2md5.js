// 将Object和Array转为md5

var crypto = require('crypto');

module.exports = function obj2md5(obj) {
    var md5 = crypto.createHash('md5');
    return md5.update(obj).digest('hex');
}