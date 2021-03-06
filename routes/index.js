const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// Welcome Page
//router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

router.get("/test", forwardAuthenticated, (req, res) =>
  res.send({
    message: "hello",
  })
);

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    user: req.user,
  })
);

module.exports = router;
