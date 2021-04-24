const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");

//NOTE:: API for getting all the running events
router.get("/running-event", async (req, res) => {
  try {
    const runningEvent = await Event.findOne({ running: true });
    if (!runningEvent) {
      res.status(400).send("There's no running Lucky Draw Event");
    } else {
      const date = runningEvent.startsAt.toLocaleDateString("en-gb", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      res.status(200).send({
        eventName: runningEvent.eventName,
        reward: runningEvent.reward,
        startsAt: date,
        time: runningEvent.startsAt.toLocaleTimeString(),
      });
    }
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
