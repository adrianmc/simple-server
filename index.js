var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Write to an empty file
writeToFile({data: []});

// GET endpoint
app.get('/get', function (req, res) {
  var text = fs.readFileSync('./store.txt','utf8');
  res.send(text);
});

// POST endpoint
app.post('/post', function (req, res) {
  var oldData = JSON.parse(fs.readFileSync('./store.txt','utf8')).data;
  writeToFile({data: oldData.concat(req.body)});
  res.send('POST request successful');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Writing function
function writeToFile(payload) {
  fs.writeFile("store.txt", JSON.stringify(payload), "utf8");
}