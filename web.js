var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var siteContent = fs.readFileSync('index.html');
  var siteBuffer = new Buffer(siteContent.length);

  siteBuffer.write(siteContent.toString('utf8'), 'utf8');

  response.send(siteBuffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
