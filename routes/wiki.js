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
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status
    })

    res.redirect('/');
  } catch (error) {
    next(error)
  }
})

wikiRouter.get('/add',async (req,res,next)=> {
  // get the add a page form
  res.send(index.addPage());

})

module.exports = wikiRouter;
