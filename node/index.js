var points = require('./json/points.json');
var scenes = require('./json/scenes.json');

var arrayWithMD5 = require('./utils/arrayWithMD5');
var points = arrayWithMD5(points);
var scenes = arrayWithMD5(scenes);

var database = {
	switchs: {
		status: 1,
		point: 0,
		scene: 0
	},
	points: points.array,
	pointMaps: points.map,
	scenes: scenes.array,
	sceneMaps: scenes.map
}

var ref = require('./utils/wilddogRef');

ref.set(database);

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
});
