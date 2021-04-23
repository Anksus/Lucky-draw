const express = require("express");
const router = new express.Router();
const User = require("../user/userModel");

//NOTE:: Get all the users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}).select({ email: 1 });
    const emails = users.map((val) => {
      return val.email;
    });
    res.send(emails);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;