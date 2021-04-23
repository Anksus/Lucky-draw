const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");
const moment = require("moment");

//NOTE:: API for getting winners from all the last week events.
router.get("/last-week-winners", async (req, res) => {
  try {
    const data = await Event.find({
      startsAt: {
        $gte: moment().subtract(7, "days").toDate(),
        $lte: moment().toDate(),
      },
      running: false,
    });

    if (!data) {
      res.status(400).send("No Events in the last week");
    } else {
      const winners = data.map((val) => {
        return { winner: val.winner, eventName: val.eventName };
      });
      res.status(200).send(winners);
    }
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
