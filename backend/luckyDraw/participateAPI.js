const express = require("express");
const router = new express.Router();
const User = require("../user/userModel");
const Event = require("./eventModel");

// NOTE:: API for participating in a event.
router.post("/participate", async (req, res) => {
  const email = req.body.email;
  const event = req.body.event;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).send("user not found");
    } else if (user.tickets <= 0) {
      res.status(400).send("You dont have enough tickets to participate");
    } else {
      var flag = 1;
      const participationList = user.luckyDrawParticipation;

      for (var i = 0; i < participationList.length; i++) {
        if (participationList[i].event === event) {
          flag = 0;
          break;
        }
      }
      const eventEnded = await Event.findOne({
        eventName: event,
        running: true,
      });
      if (!eventEnded) {
        res.status(400).send("Event not running right now");
      } else if (flag) {
        await user.updateOne({ $inc: { tickets: -1 } });
        await User.findOneAndUpdate(
          { email: email },
          {
            $push: {
              luckyDrawParticipation: { event },
            },
          }
        ).exec();
        await Event.findOneAndUpdate(
          { eventName: event },
          {
            $push: {
              participants: { email },
            },
          }
        );
        res.status(201).send("You participated successfully");
      } else {
        res
          .status(400)
          .send("You already participated, can't participate again.");
      }
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
