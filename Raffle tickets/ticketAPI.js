const express = require("express");
const router = new express.Router();
const User = require("../user/userModel");

// NOTE: ADD NEW TICKET.

router.post("/get-ticket", async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;

  try {
    const user = await User.findOne({ username: username, email: email });
    if (!user) {
      res.status(400).send("user not found");
    } else {
      await user.updateOne({ $inc: { tickets: 1 } });
      const ticket = user.tickets + 1;
      res.status(201).send("You have " + ticket + " raffle tickets");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

// NOTE: TO ADD NEW USER.

// const newUser = new User({
//   username: "ankit",
//   email: "ronaksusne@gmail.com",
// });

// newUser.save().then(() => {
//   console.log("yo saved");
// });

module.exports = router;
