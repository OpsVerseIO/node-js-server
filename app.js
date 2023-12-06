var express = require('express');
var app = express();
app.get('/', function (req, res) {
  console.log('🔍 Serving endpoint "/"');
  res.send(returnHelloMessage());
});
app.listen(3000, function () {
  console.log('🚀 Server is started and is listening on port 3000!');
});