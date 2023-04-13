const bodyParser = require('body-parser');
const express = require('express');
constnodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
  next();
});

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></button></form>');
});

app.post('/product', (req, res) => { //only fired for POST request
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
