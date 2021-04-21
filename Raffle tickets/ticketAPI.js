const express = require("express");
const router = new express.Router();
const User = require("../user/userModel");

// NOTE: ADD NEW TICKET.

router.get("/get-ticket", async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;

  try {
    const user = await User.findOneAndUpdate(
      { username: username, email: email },
      { $inc: { tickets: 1 } }
    );
    console.log(user);
    res.status(201).send("You have " + user.tickets + " raffle tickets");
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
