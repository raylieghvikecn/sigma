var ref = require('./utils/wilddogRef');

ref.child('switchs').set({ status: 1, point: 0, scene: 0 });

var points = require('./json/points.json');
var point2 = require('./json/point2.json');
var scenes = require('./json/scenes.json');

var obj2md5 = require('./utils/obj2md5.js');

function arr8map(arr, map, index, callback) {
	var md5;
	for(var i=0; i<arr.length; i++) {
		md5 = obj2md5(arr[i])
		if(map[md5] == undefined) {
			callback(arr[i], index, md5);
			index++;
		}
	}
}

ref.once('value').then(function(snapshot) {
	var value = snapshot.val();
	console.log(value);
	var map = {};
	var arr = [];
	arr8map(points, map, arr.length, function(item, index, md5) {
		map[md5] = item;
		arr.push(md5);
	});
});
ref.child('points').set(map);
ref.child('pointsMap').set(arr);

ref.once('value').then(function(snapshot) {
	var value = snapshot.val();
	var map = value.points;
	var arr = value.pointsMap;
	arr8map(point2, map, arr.length, function(item, index, md5) {
		ref.child('points/' + md5).set(item);
		ref.child('pointsMap/' + index).set(md5);
	});
});