// var schedule = require('node-schedule');

// var j = schedule.scheduleJob('1 * * * * *', function(){
// 	console.log('The answer to life, the universe, and everything!');
// });

// var date = new Date(2017,11,11,17,38,0);
// schedule.scheduleJob(date, function(){
// 	console.log('The answer to life, the universe, and everything!');
// });


// var rule1     = new schedule.RecurrenceRule();
// var times1    = [1,6,11,16,21,26,31,36,41,46,51,56];
// rule1.second  = times1;
// schedule.scheduleJob(rule1, function(){
// 	console.log('The answer to life, the universe, and everything!');
// });

var later = require('later');
var sched = later.parse.text('every 5 mins'),
    occurrences = later.schedule(sched).next(10);

for(var i=0;i<10;i++){
    console.log(occurrences[i]);
}