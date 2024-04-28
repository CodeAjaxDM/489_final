var express = require('express');
var router = express.Router();
const Cdev = require('../models/Cdev')

const sessionChecker = (req, res, next)=>{
  if(req.session.user){
    res.locals.username = req.session.user.username
    next()
  }else{
    res.redirect("/?msg=raf")
  }
}

router.use(sessionChecker)

/* GET users listing. */
router.get('/', async function(req, res, next) {
  //console.log(req.session.user)
  const cdevs = await Cdev.findAll();
  if(req.query.msg){
    res.locals.msg = req.query.msg
    res.locals.cdevid = req.query.cdevid
  }
  res.render('cdev', { cdevs })
});

router.post('/create', async function(req, res, next) {
  msg = "";
  try {

    if (req.body.age < 18)
    {
      msg += "Cdev Age Must Be 18 or older.\n"
    }
    if (msg === "")
    {
    await Cdev.create(
      {
        cdevid: req.body.cdevid,
        cdevFirstName: req.body.cdevFirstName,
        cdevLastName: req.body.cdevLastName,
        gender: req.body.gender,
        age: req.body.age,
        contributer: req.body.contributer,
        student: req.body.student,
        employed: req.body.employed,
        type: req.body.type,
        other: req.body.other,
      }
      )
    }
  if (msg === "")
  {
    res.redirect('/survey?msg=success&cdevid='+req.body.cdevid)
  }
  else
  {
    res.redirect('/survey?msg='+msg+"&cdevid="+req.body.cdevid)
  }
  } catch (error) {
  res.redirect('/survey?msg='+new URLSearchParams(error.toString()).toString()+'&cdevid'+req.body.cdevid) 
  }
});

router.get("/:cdevid", async function(req, res, next) {
  const cdev = await Cdev.findCdev(req.params.cdevid)
  if(cdev){
    res.render('cdevdetails',{cdev})
  }else{
    res.redirect('/survey/?msg=cdev+not+found&?cdevid='+req.params.cdevid)
  }
})

router.get("/delete/:cdevid", async function(req, res, next) {
  const cdev = await Cdev.findCdev(req.params.cdevid)
  if(cdev){
    await cdev.destroy()
    res.redirect('/survey/?msg=successdel&cdevid='+req.params.cdevid)
  }else{
    res.redirect('/survey/?msg=cdev+not+found&cdevid='+req.params.cdevid)
  }
})

module.exports = router;
