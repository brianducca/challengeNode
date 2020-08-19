var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.json());

app.get('/', function(req, res) {
    res.send("Docker con livereload");
});

app.listen(PORT, function(req, res) {
    console.log("API running on port:" + PORT);
});