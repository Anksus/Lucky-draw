const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");

// NOTE: API FOR GETTING NEXT EVENT

router.get("/next-event", async (req, res) => {
  try {
    const nextEvent = await Event.findOne({ startsAt: { $gte: new Date() } });
    if (!nextEvent) {
      res.send("There's no Lucky Draw Event");
    } else {
      const date = nextEvent.startsAt.toString();
      const reward = nextEvent.reward;
      const time = nextEvent.startsAt.toLocaleTimeString();

      res.send({
        date,
        reward,
        // time,
      });
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

// NOTE: ADD NEW EVENT.

// const newEvent = new Event({
//   eventName: "Grofers 7 Draw",
//   startsAt: new Date("2022-01-21 20:39:20"),
//   duration: 360,
//   reward: "iPad",
// });

// newEvent.save().then(() => {
//   console.log("new event saved");
// });

module.exports = router;
