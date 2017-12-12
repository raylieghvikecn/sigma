
var points = [
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135200", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135201", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135202", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135203", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135204", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135205", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135206", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135207", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135208", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135209", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135210", "set": "1"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135210", "set": "1"},

	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135211", "set": "0"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135212", "set": "0"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135213", "set": "0"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135214", "set": "0"},
	{"type": "date", "form": "YYYYMMDDHHmmSS", "point": "20171128135215", "set": "0"}
];

var crypto = require('crypto');
function str2md5(str) {
    var md5 = crypto.createHash('md5');
    return md5.update(str).digest('hex');
}
function obj2md5(obj) {
	var str = JSON.stringify(obj);
	return str2md5(str);
}

var pointsWithMD5 = {};
for(var i in points) {
	var key = obj2md5(points[i]);
	if(pointsWithMD5[key] == undefined) {
		pointsWithMD5[key] = points[i];
	}
}

var scenes = [];
var sceneSet1 = {},sceneSet1Step = 0;
var sceneSet0 = {},sceneSet0Step = 0;
for(var i in pointsWithMD5) {
	if(pointsWithMD5[i].set == "1") {
		sceneSet1["step" + (sceneSet1Step++)] = i;
	}
	if(pointsWithMD5[i].set == "0") {
		sceneSet0["step" + (sceneSet0Step++)] = i;
	}
}
scenes.push(sceneSet1);
scenes.push(sceneSet0);

var scenesWithMD5 = {};
var sceneIndex = 0;
for(var i in scenes) {
	var key = obj2md5(scenes[i]);
	if(scenesWithMD5[key] == undefined) {
		scenesWithMD5[key] = {name: "情景" + (sceneIndex++), steps: scenes[i]};
	}
}

var database = {
	switchs: {setting: 1, point: "", scene: ""},
	points: pointsWithMD5,
	scenes: scenesWithMD5,
}

var ref = require('./utils/wilddogRef');

ref.set(database);

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
});
