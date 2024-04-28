var express = require('express');
var router = express.Router();
const Customer = require('../models/Customer')

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
  const customers = await Customer.findAll();
  if(req.query.msg){
    res.locals.msg = req.query.msg
    res.locals.customerid = req.query.customerid
  }
  res.render('customer', { customers })
});

router.post('/create', async function(req, res, next) {
  msg = "";
  try {

    if (req.body.age < 18)
    {
      msg += "Customer Age Must Be 18 or older.\n"
    }
    if (req.body.amountSpent > 150){
      msg += "Amount Spent Must Be less than 150.\n"
    }
    if (msg === "")
    {
    await Customer.create(
      {
        customerid: req.body.customerid,
        customerFirstName: req.body.customerFirstName,
        customerLastName: req.body.customerLastName,
        gender: req.body.gender,
        age: req.body.age,
        location: req.body.location,
        drinksOrdered: req.body.drinksOrdered,
        amountSpent: req.body.amountSpent,
        member: req.body.member,
      }
      )
    }
  if (msg === "")
  {
    res.redirect('/survey?msg=success&customerid='+req.body.customerid)
  }
  else
  {
    res.redirect('/survey?msg='+msg+"&customerid="+req.body.customerid)
  }
  } catch (error) {
  res.redirect('/survey?msg='+new URLSearchParams(error.toString()).toString()+'&customerid'+req.body.customerid) 
  }
});

router.get("/:customerid", async function(req, res, next) {
  const customer = await Customer.findCustomer(req.params.customerid)
  if(customer){
    res.render('customerdetails',{customer})
  }else{
    res.redirect('/survey/?msg=customer+not+found&?customerid='+req.params.customerid)
  }
})

router.get("/delete/:customerid", async function(req, res, next) {
  const customer = await Customer.findCustomer(req.params.customerid)
  if(customer){
    await customer.destroy()
    res.redirect('/survey/?msg=successdel&customerid='+req.params.customerid)
  }else{
    res.redirect('/survey/?msg=customer+not+found&customerid='+req.params.customerid)
  }
})

module.exports = router;
