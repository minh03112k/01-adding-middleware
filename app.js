const bodyParser = require('body-parser');
const express = require('express');
constnodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorRouter = require('./routes/error');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRouter);

app.use('/admin', adminRouter);

app.use(errorRouter);


app.listen(3000);
