var data = require('./json/data.json');
var array2map = require('./utils/array2map');

var map = array2map(data);
var point;

var arr1 = [];
var arr2 = [];
var i = 0;
for (var key in map) {
	if(i==0) point = key;
	if(i%2 == 0) arr1.push(key);
	else arr2.push(key);
	i++;
}
function arr2md5(arr) {
	var temp = "";
	for(var i=0; i<arr.length; i++) {
		temp += arr[i];
	}
	return temp;
}
var arr1md5 = arr2md5(arr1);
var obj1 = {key: arr1md5, value: arr1, name: '情景1'};
var obj2 = {key: arr2md5(arr2), value: arr2, name: '情景2'};

var database = {
	switch: {setting: 1},
	current: {
		scene: 0,
		point: point
	},
	data: map,
	date: [obj1, obj2]
}

var ref = require('./utils/wilddogRef');

ref.set(database);

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
});
