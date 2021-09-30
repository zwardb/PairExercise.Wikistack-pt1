const express = require('express');
const morgan = require('morgan');
const index = require('./views/index');
const layout = require('./views/layout');

const app = express();


app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req,res)=> {
  res.send(layout(''));
})
const PORT = '3000';

app.listen(PORT, ()=> {
  console.log(`server on ${PORT}`);
})
