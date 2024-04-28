var express = require("express");
var router = express.Router();
var cors = require("cors");

router.use(cors());

router.get("/", (req, res, next) => {
  res.send("in api route");
});

module.exports = router;
