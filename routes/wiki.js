const express = require('express');
const wikiRouter = express.Router();
const {db,Page,User} = require('../models/index.js');
const index = require('../views/index');

wikiRouter.get('/', async (req,res,next)=> {
  const allPages = await Page.findAll();
  console.log(allPages);
  res.send(allPages);
})

wikiRouter.post('/',async (req,res,next)=>{

  // const newPage = await Page.create({
  //   title: 'abc',
  //   slug: 'http://foo.com',
  //   content: 'ajdklffdsfd'
  // });
  res.redirect('/wiki');
})

wikiRouter.get('/add',async (req,res,next)=> {
  // get the add a page form
  res.send(index.addPage());

})

module.exports = wikiRouter;
