var scene = {"name": "情景7"};

var point1 = {"type": "date", "form": "YYYYMMDDHHmmSS", "data": "20171116090011", "set": "1"};
var point2 = {"type": "date", "form": "YYYYMMDDHHmmSS", "data": "20171116010022", "set": "1"};
var point3 = {"type": "date", "form": "YYYYMMDDHHmmSS", "data": "20181116030012", "set": "1"};

var arr = [point1, point2, point3];
var indexs = [];

var ref = require('./utils/wilddogRef');
var hasObjInMap = require('./utils/getMD5');

(function aaa(arr, index) {
	if(index < arr.length) {
		ref.once('value').then(function(snapshot) {
			var value = snapshot.val();

			var map = value.points;
			var mrr = value.maparr;
			var idx = mrr.length;
			
			hasObjInMap(arr[index], map, function(md5) {
				ref.child('points/' + md5).set(arr[index]);
				ref.child('maparr/' + idx).set(md5);
				indexs.push(idx);
			}, function(md5) {
				for(var i=0; i<mrr.length; i++) {
					if(mrr[i] == md5) {
						indexs.push(i);
					}
				}
			});
			index++;
			aaa(arr, index);
		});
	} else {
		ref.once('value').then(function(snapshot) {
			var value = snapshot.val();

			var scenes = value.scenes;
			scene.points = indexs;

			hasObjInMap(scene, scenes, function(md5) {
				ref.child('scenes/' + md5).set(scene);
			});
		});
	}
})(arr, 0);