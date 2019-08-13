const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/ANGULAR-DEPLOY'));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/ANGULAR-DEPLOY/index.html'));
});

app.listen(process.env.PORT || 3000);