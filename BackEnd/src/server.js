const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost/onmistack09',
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);