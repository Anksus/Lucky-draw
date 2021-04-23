const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");

//NOTE:: API for getting next event from the current time.
router.get("/next-event", async (req, res) => {
  try {
    const nextEvent = await Event.findOne({ startsAt: { $gte: new Date() } });
    if (!nextEvent) {
      res.send("There's no Lucky Draw Event");
    } else {
      const date = nextEvent.startsAt.toLocaleDateString("en-gb", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const reward = nextEvent.reward;
      const time = nextEvent.startsAt.toLocaleTimeString();
      const eventName = nextEvent.eventName;
      res.send({
        date,
        reward,
        time,
        eventName,
      });
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
