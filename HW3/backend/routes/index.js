var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();
  if(req.query.msg){
    res.locals.msg = req.query.msg
    res.locals.email = req.query.email
  }
  res.render('index', {users});
});

router.post('/sign', async function(req, res, next) {
  const msg = validateEmail(req.body.first_name, req.body.email);
  if (msg === "success")
  {  
    const user = await User.findUser(req.body.email, req.params.first_name, req.params.last_name)
    if(user!== null){
      res.redirect(`/?msg=already_signed`)
    }else{
      const newUser = await User.create({ first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, comment: req.body.comment });
      res.redirect(`/?msg=${msg}`)
    }
  }
  else{
    res.redirect(`/?msg=${msg}`)
  }
});

router.get('/logout', function(req,res, next){
  if(req.session.user){
    req.session.destroy()
    res.redirect("/?msg=logout")
  }else {
    res.redirect("/")
  }
  
})

function validateEmail(name, email)
{
  let valid = false;
  let msg = "";
  const valid_at = email.includes('@');
  const valid_com = (email.endsWith(".com") || email.endsWith(".org") || email.endsWith(".edu"));
  const valid_name = name.length >= 5 && name.length <= 20;
  valid = valid_at && valid_com && valid_name;
  if(!valid)
  {
    if(!valid_name){
      msg = "name_fail";
    }
    else{
      msg = "email_fail";
    }
      
  }
  else
  {
    msg = "success";
  }
  return msg;
}

module.exports = router;
