const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");

//NOTE:: API for getting next event from the current time.
router.get("/next-event", async (req, res) => {
  try {
    const nextEvent = await Event.findOne({ startsAt: { $gte: new Date() } });
    if (!nextEvent) {
      res.status(401).send("There's no Lucky Draw Event");
    } else {
      const date = nextEvent.startsAt.toLocaleDateString("en-gb", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const reward = nextEvent.reward;
      const time = nextEvent.startsAt.toLocaleTimeString();
      const eventName = nextEvent.eventName;
      const running = nextEvent.running;
      res.status(200).send({
        date,
        reward,
        time,
        eventName,
        running,
      });
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
