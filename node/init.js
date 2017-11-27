var ref = require('./utils/wilddogRef');

ref.child('switchs').set({ status: 1, point: 0, scene: 0 });

var obj2md5 = require('./utils/obj2md5.js');

function hasObjInMap(obj, map, callback) {
	md5 = obj2md5(obj)
	if(map[md5] == undefined) {
		callback(md5);
	}
}

var points = require('./json/points.json');
var point2 = require('./json/point2.json');
var scenes = require('./json/scenes.json');

ref.once('value').then(function(snapshot) {
	var value = snapshot.val();

	var map = {};
	var arr = [];
	for(var i=0; i<points.length; i++) {
		hasObjInMap(points[i], map, function(md5) {
			map[md5] = points[i];
			arr.push(md5);
		});
	}
	ref.child('points').set(map);
	ref.child('maparr').set(arr);
	var mms = {};
	for(var i=0; i<scenes.length; i++) {
		hasObjInMap(scenes[i], map, function(md5) {
			mms[md5] = scenes[i];
		});
	}
	ref.child('scenes').set(mms);
	
	(function aaa(arr, index) {
		ref.once('value').then(function(snapshot) {
			if(index < arr.length) {
				var value = snapshot.val();

				var map = value.points;
				var idx = value.maparr.length;
				
				hasObjInMap(arr[index], map, function(md5) {
					ref.child('points/' + md5).set(arr[index]);
					ref.child('maparr/' + idx).set(md5);
				});
				index++;
				aaa(arr, index);
			} 
		}).catch(function(err){
			console.info(err);
		});;
	})(point2, 0);
});


