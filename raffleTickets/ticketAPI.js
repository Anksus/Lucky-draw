const express = require("express");
const router = new express.Router();
const User = require("../user/userModel");

// NOTE:: API for getting a Raffle ticket to participate in Lucky Draw Event.
router.post("/get-ticket", async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).send("user not found");
    } else {
      await user.updateOne({ $inc: { tickets: 1 } });
      const ticket = user.tickets + 1;
      res.status(201).send("ticket added successfully");
    }
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
