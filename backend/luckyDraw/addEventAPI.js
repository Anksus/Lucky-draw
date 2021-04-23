const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");
const moment = require("moment");
const startLuckyDraw = require("../backgroundJobs/startLuckyDraw");
const scheduleComputation = require("../backgroundJobs/scheduleWinnerComputation");

//NOTE:: Add-event API and initializing scheduled computation job.
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
    eventName: data.eventName,
  };

  try {
    const duplicateEvent = await Event.findOne({ eventName: data.eventName });
    if (duplicateEvent) {
      res.status(201).send("Event already registered! Can't register again");
    } else {
      await event.save();
      startLuckyDraw(computeData);
      scheduleComputation(computeData);
      res.send("Event registered successfully");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
