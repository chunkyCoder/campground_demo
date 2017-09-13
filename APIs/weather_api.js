var request = require('request');
request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22fredericksburg%2C%20va%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', function (error, response, body) {
    var parsedData = JSON.parse(body); //used to convert BODY from String to JSON
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('Sunset for Fredericksburg, VA:');
    console.log('  date:', parsedData.query.results.channel.item.forecast[0].date); // dot notation
    console.log('  time:', parsedData['query']['results']['channel']['astronomy']['sunset']); // bracket notation
});

// 1. require Request package
// 2. request('url', function (error, response, body) {
//       whatever function you want to perform goes here 
//    }

