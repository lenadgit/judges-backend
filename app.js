var express = require('express');
var judges = require("./mock_judges.json");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/judges', function(req, res) {
  res.send(judges);
});

app.listen(8088);
