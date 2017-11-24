var ref = require('./utils/wilddogRef');

ref.child('switchs').set({ status: 1, point: 0, scene: 0 });

var points = require('./json/points.json');
var points2 = require('./json/points2.json');
// console.log(points2);
var scenes = require('./json/scenes.json');
var obj2md5 = require('./utils/obj2md5.js');

var map = {};
for(var i=0; i<points.length; i++) {
	var md5 = obj2md5(points[i])
	if(map[md5] == undefined) {
		map[md5] = points[i];
	}
}
ref.child('points').set(map);

ref.child('points').once('value').then(function(snapshot) {
	var val = snapshot.val();
	for(var i=0; i<points2.length; i++) {
		var md5 = obj2md5(points2[i])
		if(val[md5] == undefined) {
			console.log(0);
			ref.child('points/' + md5).set(points2[i]);
		}
	}
}).catch(function(err){
	console.info(err);
});
