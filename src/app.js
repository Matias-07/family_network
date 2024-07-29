const express = require('express');
const rutasMain = require ('./routes/main.js');

const app = express(); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

app.listen(4321,() => console.log('The network is online')); 

app.get('/', rutasMain); 