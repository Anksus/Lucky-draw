const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");

// NOTE: API FOR GETTING NEXT EVENT

router.get("/next-event", async (req, res) => {
  try {
    const nextEvent = await Event.find({}).sort({ _id: 1 }).limit(1);
    if (!nextEvent[0]) {
      res.send("There's no Lucky Draw Event");
    } else {
      const date = nextEvent[0].startsAt.toString();
      const reward = nextEvent[0].reward;
      const time = nextEvent[0].startsAt.toLocaleTimeString();

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
//   eventName: "Grofers 12 Draw",
//   startsAt: new Date("2020-04-21 20:39:20"),
//   duration: 360,
//   reward: "iPad",
// });

// newEvent.save().then(() => {
//   console.log("new event saved");
// });

module.exports = router;
