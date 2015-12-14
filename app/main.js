var mongo = require('mongodb').MongoClient;
var express = require('express');
var app = express();

var host = process.env.MONGODB_HOST;
var port = process.env.MONGODB_PORT;

var url = 'mongodb://'+host+':'+port+'/';

mongo.connect(url, function(err, db) {
  //assert.equal(null, err);
  if (err) {
    console.log(err);
  } else {
    console.log("Connected correctly to server");
  }
  //db.close();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


