var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.json());


app.listen(PORT, function(req, res) {
    console.log("API running on port:" + PORT);
});