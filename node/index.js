var wilddog = require('wilddog');

var config = {
	syncURL: "https://helloworldsigma33.wilddogio.com" //输入节点 URL
};
wilddog.initializeApp(config);
var ref = wilddog.sync().ref();

ref.child("anArray").set([{name: 1, arr: [1,2,3]}, {name: 2, arr: [1,2,3]}, {name: 3, arr: [1,2,3]}]);
ref.child("anObject").set({name: 'haha', age: '100'});

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
});
