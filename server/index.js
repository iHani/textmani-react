const express = require('express');
const path = require('path');
const app = express();
const PORT = 9020;
const buildDir = '../build';
app.use(express.static(path.join(__dirname, buildDir)));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, buildDir, 'index.html'));
});

app.listen(PORT, () => console.log("Connected on", PORT));
