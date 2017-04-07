var meli = require('./meli.js');
var Promise = require('promise');

var http = require('http');
var rest = require('restler');
var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('my.csv')


meli.search("MCO","playstation").then(function(items){
    var data = [];
	items.forEach(function(item){
		var location = item.seller_address;
		if(location.longitude && location.latitude){
		    data.push( {longitude : location.longitude  ,latitude :  location.latitude})
		}
	});
    csv.write(data,{headers: true}).pipe(ws);
});





