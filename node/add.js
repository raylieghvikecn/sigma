var scene = {"name": "情景5"};

var point1 = {"type": "date", "form": "YYYYMMDDHHmmSS", "data": "20171116080000", "set": "1"};
var point2 = {"type": "date", "form": "YYYYMMDDHHmmSS", "data": "20171116080000", "set": "1"};
var point3 = {"type": "date", "form": "YYYYMMDDHHmmSS", "data": "20171116080011", "set": "1"};

var obj2md5 = require('./utils/obj2md5.js');

var point1md5 = obj2md5(point1);
var point2md5 = obj2md5(point2);
var point3md5 = obj2md5(point3);

var ref = require('./utils/wilddogRef');

ref.child('pointMaps/' + point1md5).once('value').then(function(snapshot){
	console.log(snapshot.val());
})
.catch(function(err){
	console.info(err);
});