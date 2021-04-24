const express = require("express");
const router = new express.Router();
const User = require("./userModel");

//NOTE:: Add new user
router.post("/add-user", async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;

  const newUser = new User({ email: email, username: username });
  try {
    await newUser.save();
    res.status(201).send("User saved");
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
