const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");
const moment = require("moment");
const computeWinner = require("../computeWinner/scheduleWinnerComputation");

router.post("/add-event", async (req, res) => {
  const data = req.body;
  const event = new Event({
    eventName: data.eventName,
    startsAt: moment(new Date(data.startsAt)),
    duration: data.duration,
    reward: data.reward,
  });
  const computeData = {
    startsAt: moment(new Date(data.startsAt)),
    duration: data.duration,
  };

  try {
    const duplicateEvent = await Event.findOne({ eventName: data.eventName });
    if (duplicateEvent) {
      res.status(201).send("Event already registered! Can't register again");
    } else {
      await event.save();
      computeWinner(computeData);
      res.send("Event registered successfully");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
