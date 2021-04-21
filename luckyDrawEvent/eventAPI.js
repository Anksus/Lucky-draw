const express = require("express");
const router = new express.Router();
const Event = require("../luckyDrawEvent/eventModel");

// NOTE: API FOR GETTING NEXT EVENT

router.get("/next-event", async (req, res) => {
  const nextEvent = await Event.find({}).sort({ _id: 1 }).limit(1);
  if (!nextEvent) {
    res.send("There's no Lucky Draw Event");
  }
  const date = nextEvent[0].startsAt.toString();
  const reward = nextEvent[0].reward;
  const time = nextEvent[0].startsAt.toLocaleTimeString();

  res.send({
    date,
    reward,
    // time,
  });

  //   res.send(nextEvent;
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
