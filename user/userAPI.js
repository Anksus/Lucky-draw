const express = require("express");
const router = new express.Router();
const User = require("./userModel");

//NOTE:: Get all the users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}).select({ email: 1, tickets: 1 });
    const userData = users.map((val) => {
      return {
        email: val.email,
        tickets: val.tickets,
      };
    });
    res.status(200).send(userData);
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
