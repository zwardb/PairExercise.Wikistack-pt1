const express = require('express');
const morgan = require('morgan');
const index = require('./views/index');
const layout = require('./views/layout');
const { db } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

const app = express();

db.authenticate()
  .then(() => {
    console.log('connected to the database')
  })

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/wiki',wikiRouter);
app.use('/users',userRouter);

app.get('/', (req,res)=> {
  // res.send(layout(''));
  res.redirect('/wiki');
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
