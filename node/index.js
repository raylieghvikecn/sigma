var wilddog = require('wilddog');
var initjson = require('./init.json');

var config = {
	syncURL: "https://helloworldsigma33.wilddogio.com" //输入节点 URL
};
wilddog.initializeApp(config);
var ref = wilddog.sync().ref();

ref.child("list").set(initjson);

ref.child("list/1").on("value", function(snapshot) {
    console.log(snapshot.val());
});
