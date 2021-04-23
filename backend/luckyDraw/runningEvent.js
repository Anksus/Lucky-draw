const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");

//NOTE:: API for getting all the running events
router.get("/running-event", async (req, res) => {
  try {
    const runningEvent = await Event.findOne({ running: true });
    if (!runningEvent) {
      res.status(401).send("There's no running Lucky Draw Event");
    } else {
      console.log(runningEvent);
      res.status(200).send({
        eventName: runningEvent.eventName,
        reward: runningEvent.reward,
        startsAt: runningEvent.startsAt,
      });
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
