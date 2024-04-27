const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:email", async function (req, res, next) {
  const user = await User.findUser(req.params.email, req.params.first_name, req.params.last_name);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ msg: "user with that email does not exist" });
  }
});

// uncomment to return delete function. requeued removal from Subu.
// router.delete("/:email", async function (req, res, next) {
//   console.log(req.params)
//   const user = await User.findUserbyEmail(req.params.email);
//   if (user) {
//     await user.destroy();
//     res.json({ msg: `user ${req.params.first_name} ${req.params.last_name} deleted successfully` });
//   } else {
//     res.status(404).json({ msg: "user with that email does not exist" });
//   }
// });

router.post("/", async function (req, res, next) {
  try {
    await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      comment: req.body.comment,
    });
    res.json({ msg: `User ${req.body.first_name} ${req.body.last_name} with email: ${req.body.email} created successfully` });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      // Handle duplicate email error
      res.status(400).json({ msg: 'Error: Email already exists.' });
    } else {
      // Handle other errors
      res.status(500).json(error);
    }
  }
});


module.exports = router;
