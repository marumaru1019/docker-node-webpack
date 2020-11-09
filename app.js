const express = require('express');
const path = require('path');
const app = express();
const ejs = require("ejs");


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// publicファイルを基準にする
app.use(express.static("public"));
// ejsを読取り可能にする
app.set('ejs',ejs.renderFile)


// App
app.get('/', (req, res) => {
  res.render("index.ejs")
});

app.get('/practice', (req, res) => {
  res.render("practice.ejs")
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);