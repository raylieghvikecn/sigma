var data = require('./json/data.json');
var array2map = require('./utils/array2map');

var database = {
	switch: "1",
	current: "",
	data: array2map(data),
	date: {}
}

var ref = require('./utils/wilddogRef');

ref.set(database);

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
});
