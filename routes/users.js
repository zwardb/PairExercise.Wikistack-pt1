const { response } = require('express');
const express = require('express');
const userRouter = express.Router();
const {db,Page,User} = require('../models/index.js');
const index = require('../views/index');


userRouter.get('/', async (req,res)=> {
  const allUsers = await User.findAll();
  res.send(allUsers);
});

userRouter.post('/',async (req,res)=> {
  const newUser = await User.create({
    name: 'Bob',
    email: 'bob@gmail.com',
  });
  res.redirect('/users');
})



userRouter.get('/:id', async (req,res)=> {
  const user = await User.findAll({
    where: {
      id: req.params.id
    }
  });
  res.send(user);
});


userRouter.put('/:id', async (req,res)=> {
  const user = await User.findAll({
    where: {
      id: req.params.id
    }
  });
  await user.update({name: 'Tom'});

  res.redirect('/users')
});

userRouter.delete('/:id', async (req,res)=> {
  const user = await User.findAll({
    where: {
      id: req.params.id
    }
  });
  await user.destroy();
  res.redirect('/users')
})



module.exports = userRouter;
