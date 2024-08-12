const express = require('express');
const rutasMain = require ('./routes/main.js');
const Users = require('./routes/users.js')

const app = express(); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.listen(4321,() => console.log('The network is online')); 

app.use('/', rutasMain); 

app.use('/users', Users); 