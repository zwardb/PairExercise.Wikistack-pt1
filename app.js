const express = require('express');
const morgan = require('morgan');
const index = require('./views/index');
const layout = require('./views/layout');
const { db } = require('./models');

const app = express();

db.authenticate()
  .then(() => {
    console.log('connected to the database')
  })

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req,res)=> {
  res.send(layout(''));
})
const PORT = '3000';

async function init() {
  try {
  await db.sync({force: false});

  app.listen(PORT, ()=> {
    console.log(`server on ${PORT}`);
  })
  } catch (err) {
    console.log('error in init');
  }
}

init();


